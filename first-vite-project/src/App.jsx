import React from "react"
import Home from "./components/home"
import Navbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router"


function App () {
  return (

    <>
      <Routes>
         <Route path="/home" element={<Home />}/>
      </Routes>
      <Navbar/>
      <Home/>
    </>

  )
}

export default App