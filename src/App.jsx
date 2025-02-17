import React from 'react'
import Haeder from './conpunents/Haeder/Haeder'
import Footer from './conpunents/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Contact from './conpunents/Contact/Contact'

const App = () => {
  return (
    <>
     <Haeder/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
