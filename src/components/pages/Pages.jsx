import React from 'react';
import Header from "../common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Rdv from "../rdv/Rdv"
import Contact from "../contact/Contact"
import Login from "../auth/login"
import Register from "../auth/register"
import HomeUser from "../auth/homeuser"


const Pages = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/rdv' element={<Rdv/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/homeuser' element={<HomeUser/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
