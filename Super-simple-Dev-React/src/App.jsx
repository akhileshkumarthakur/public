import { useState } from 'react'
import InputBox from './input'
import ChatMessages from './ChatMessages'
import './App.css'

function App() {

  return (
    <>
      <InputBox />
      <div className="chatbox-parent">
          <ChatMessages message="Hi?" sender="user"/>
          <ChatMessages message="Hi, How can we help you today?" sender="robot"/>
          <ChatMessages message="Hi, Do you have dips?" sender="user"/>
          <ChatMessages message="Yes sir, We do have. How many do you require?" sender="robot"/>
          <ChatMessages message="Only one please" sender="user"/>
          <ChatMessages message="Okay Please send your delivery address. Thank you" sender="robot"/>
      </div>
      
    </>

    
  )
}

export default App
