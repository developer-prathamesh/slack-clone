import './App.css';
import {useEffect,useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import SideBar from './components/SideBar'
import db from './FireBase.js'
import {auth,provider} from "./FireBase"

function App() {
  const [rooms , setRooms] = useState([])
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const getChannels = ()=>{
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms(snapshot.docs.map((doc)=>{
        return {id:doc.id,name:doc.data().name}
      }))
    })
  }

  useEffect(() => {
    getChannels()
  }, [])

  const signOut = ()=>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  
  return (
    <div className="App">
      <Router>
        {
          !user?
          <Login setUser={setUser}></Login>
          :
        
          <Container>
            <Header signOut={signOut} user={user}></Header>
            <Main>
              <SideBar rooms={rooms}></SideBar>
              <Switch>
                <Route path = "/room/:channelId">
                    <Chat user={user}></Chat>
                </Route>
                <Route path="/">
                  Select or Create Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

const Container =  styled.div `

  width:100%;
  height:100vh;
  display:grid;
  grid-template-rows:48px minmax(0,1fr);
`

const Main = styled.div `
  display:grid;
  grid-template-columns:260px auto;


`

export default App;
