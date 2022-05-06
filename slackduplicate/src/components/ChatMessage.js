import React from 'react'
import styled from 'styled-components'
function ChatMessage({text,name,image,timeStamp}) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt=""/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timeStamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

const Container = styled.div `
    padding:8px 20px;
    display:flex;
    align-items:center;
`
const UserAvatar = styled.div `
    height:40px;
    width:40px;
    border-radius:2px;

    img{
        width:100%;
    }
    
    
`
const MessageContent = styled.div `
    display:flex;
    flex-direction:column;
`
const Name = styled.div `
    font-weight:bold;
    padding-left:10px;

    span{
        margin-left:10px;
        color:rgb(97,96,97);
        font-weight:lighter;
        font-size:13px;
    }
`
const Text = styled.div `
    font-size:15px;
    padding-left:12px;
    padding-top:6px;
    color:rgb(97,96,97);
`

export default ChatMessage

