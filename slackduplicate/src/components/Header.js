import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header(props) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon></AccessTimeIcon>
                <SearchContainer>
                    <SearchBox>
                        <input type="text" placeholder="Search..."/>
                    </SearchBox>
                </SearchContainer>
                <HelpOutlineIcon></HelpOutlineIcon>
            </Main>
            <UserContainer>
                <Name>
                   {props.user.name}
                </Name>
                <UserImg onClick={props.signOut}>
                    <img src={props.user.photo?props.user.photo:"https://i.imgur.com/6VBx3io.png"} alt=""/>
                </UserImg>
            </UserContainer>
        </Container>
    )
}
const Container = styled.div `
    background-color:#350d36;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
`

const Main = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
`

const SearchContainer  = styled.div `
    min-width:400px;
    margin:10px;

`

const SearchBox = styled.div `
    box-shadow:inset  0 0 0 1px rgb(104 74 104);
    border-radius:6px;
    color:white;
    display:flex;
    align-items:center;
    input{
        width:100%;
        background:transparent;
        outline:none;
        border:none;
        color:white;
        padding:10px;
        
    }
    
`

const UserContainer = styled.div `
    display:flex;
    align-items:center; 
    margin:8px;
`
const Name = styled.div `
    margin:8px;
`
const UserImg = styled.div `

    img{
        height:35px;
        width:35px;
        
        border-radius:50%;
    }
    
`
export default Header
