import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
//import About from "../about/About"
//import Pricing from "../pricing/Pricing"
//import Blog from "../blog/Blog"
//import Services from "../services/Services"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages