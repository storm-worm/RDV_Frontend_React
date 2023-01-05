import React, { useState } from 'react';
import Header from "../common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
//import About from "../about/About"
//import Pricing from "../pricing/Pricing"
//import Blog from "../blog/Blog"
import Rdv from "../rdv/Rdv"
import Contact from "../contact/Contact"
import Login from "../auth/Login";

const Pages = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/rdv' element={<Rdv/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
