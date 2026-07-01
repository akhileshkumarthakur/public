import React from "react";
import chatbotImg from './assets/chatbot.webp'
import userImg from './assets/user.webp'

function ChatMessages (props) {

    const sender = props.sender
    const message = props.message

    return (
            <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '18px',
                    marginLeft: sender === 'user' && '300px'
                }}> 
                    {sender === 'robot' && <img width={'60'} src={chatbotImg} />}
                    <p style={{display: 'inline', marginLeft: '15px'}}> {props.message} </p>
                    {sender === 'user' && <img width={'60'} src={userImg} />}
                </div>
            )
       
}

export default ChatMessages 