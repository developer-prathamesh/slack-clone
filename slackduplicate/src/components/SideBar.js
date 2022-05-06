import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import {sidebarItemsData} from '../data/SideBarData'
import AddIcon from '@material-ui/icons/Add' 
import db from '../FireBase'
import {useHistory} from 'react-router-dom'
function SideBar(props) {
    const history = useHistory();

    const goToChannel = (id)=>{
        if(id){ 
            console.log(id)
            history.push(`/room/${id}`)
        }
    }


    const addChannel = ()=>{
        const promptName = prompt("Enter Channel Name")
        if(promptName){
            db.collection('rooms').add({
                name:promptName
            })
        }
    }


    return (
        <Container>
            <WorkSpace>
                <Name>Clever Programmer</Name>
                <NewMessage>
                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                </NewMessage>
            </WorkSpace>
            <MainChannels>
                {
                    sidebarItemsData.map(item=>(
                    
                        <MainChannelItem>
                            {item.icons} {item.text}
                        </MainChannelItem>
                            
                        
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>Channels</div>
                    <AddIcon onClick={addChannel}></AddIcon>
                </NewChannelContainer>
                <ChannelsList>

                    {
                        props.rooms.map(item=>(
                            <Channel onClick={()=>goToChannel(item.id)}>
                                #{item.name}
                            </Channel>
                        ))
                    }
                   
                   
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}
const Container  = styled.div `
    background:#3F0E40;
    color:white;
    

`
const WorkSpace = styled.div`
    height:64px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left:10px;
    border-bottom:1px solid #532753;
    cursor:pointer;
`
const Name = styled.div `
    text-align:center;
    
`
const NewMessage  =styled.div `
    height:36px;
    width:36px;
    background-color:white;
    color:#3F0E40;
    fill:#3F0E40;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:10px;
    border-radius:50%;
`
const MainChannels =styled.div `
    margin-top:19px;
    
`
const MainChannelItem =styled.div `

    color:rgb(188,171,188);
    display:grid;
    grid-template-columns:15% auto;
    height:28px;
    align-items:center;
    padding-left:10px;
    cursor:pointer;
    margin-bottom:10px;

`

const ChannelsContainer = styled.div `
    color:rgb(188,171,188);
    margin-top:18px;
`
const NewChannelContainer  =styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:10px;
`
const ChannelsList = styled.div ``
const Channel = styled.div `
    height:28px;
    display:flex;
    align-items:center;
    margin-left:10px;
    cursor:pointer;

    
`
export default SideBar
