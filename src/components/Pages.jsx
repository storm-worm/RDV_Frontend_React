import React from "react"
import Header from "./Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Footer from "./Footer"
//import About from ".About"
//import Pricing from ".Pricing"
//import Blog from "../blog/Blog"
//import Services from "../services/Services"
//import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
