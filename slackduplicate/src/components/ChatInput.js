import React,{useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'
function ChatInput({sendMessage}) {

    const [input,setInput]  = useState("")

    const send = (e)=>{
        e.preventDefault()
        if(!input) return;
        sendMessage(input)
        setInput("")
    }

    return (


        <Container>
            <InputContainer>
                <form>
                    <input
                     onChange={(e)=>
                        setInput(e.target.value)
                     } 
                     type="text" 
                     value={input}
                     placeholder="Message"/>
                    <SendBtn 
                        type="submit"
                        onClick={send}>
                        <SendIcon></SendIcon>
                    </SendBtn>
                </form>
            </InputContainer>
        </Container>
    )
}
const Container  = styled.div `
    padding:22px;
`

const InputContainer = styled.div `
    border:1px solid #8d8d8e;
    border-radius:6px;
    

    form{
        display:flex;
        align-items:center;
        padding-left:10px;
        input{
            flex:1;
            padding:12px;
            border:none;
            outline:none;
            font-weight:700;
        }
    }
`
const SendBtn = styled.button `
    margin-right:10px;
    background:#007a5a;
    border-radius:2px;
    width:32px;
    height:32px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    color:white;
    border:none;

    .MuiSvgIcon-root{
        width:18px;
    }

    &:hover{
        ${'' /* box-shadow:inset  0 0 0 1px rgb(104 74 104); */}
        background:#148567;
    }

`
export default ChatInput
