import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../FireBase'
import {useParams} from 'react-router-dom'
import firebase from 'firebase'

function Chat({user}) {

    let {channelId }= useParams()
    const [channel,setChannel]  = useState()
    const [messages,setMessages]  = useState([])
    const getMessages = ()=>{
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timeStamp','asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>
                doc.data()
            )
            
            setMessages(messages)
        })
    }

    const sendMessage = (text)=>{
        if(channelId){
            let payload = {
                text:text,
                user:user.name,
                userImg:user.photo,
                timeStamp:firebase.firestore.Timestamp.now()
            }
            db.collection('rooms').doc(channelId).collection('messages').add(payload)
            console.log(payload)
        }
    }

    const getChannel = ()=>{
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data())
        })
    }
    useEffect(()=>{
        getChannel();
        getMessages()
    },[channelId])
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel&&channel.name}
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info></Info>
                    
                </ChannelDetails>
            </Header>
            <MessageContainer>
                {
                    messages.length>0&&
                    messages.map((data,index)=>(

                        <ChatMessage 
                            text={data.text} 
                            name  = {data.user}
                            image = {data.userImg}
                            timeStamp = {data.timeStamp}
                        />
                    ))
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}></ChatInput>
        </Container>
        
    )
}

const Container = styled.div `
    display:grid;
    grid-template-rows:64px auto min-content;
    min-height:0;
`
const MessageContainer = styled.div `

    display:flex;
    flex-direction:column;
    overflow-y:scroll;
`
const Header = styled.div `
    padding:20px;
    display:flex;
    align-items:center;
    border-bottom:1px solid rgba(83,39,83,.13);
    justify-content:space-between;
    cursor:pointer;
`

const Channel  = styled.div ``
const ChannelDetails  = styled.div `
    display:flex;
    align-items:center;
    padding:10px;
    
    color:#606060;

`
const ChannelName  = styled.div `
    font-weight:700;
`
const ChannelInfo  = styled.div `
    font-weight:400;
    color:#606060;
    font-size:13px;
    margin-top:10px;
`
const Info =styled(InfoOutlinedIcon) `
    margin:10px;

`
export default Chat
