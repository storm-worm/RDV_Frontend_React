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
import HourSelection from '../home/recent/HourSelection';
import AppointmentConfirmation from '../home/recent/AppointmentConfirmation';
// import DatePickerPage from '../home/recent/DatePickerPage';
// import RecentCard from '../home/recent/RecentCard';



const Pages = () => {

  // const {getToken} = AuthUser();

  // if(!getToken()){
  //   return(
  //     <>
  //     <Router>
  //       <Header />
  //       <Routes>
  //         <Route exact path='/login' element={<Login/>} />
  //       </Routes>
  //     </Router>
  //     </>
      
  //   ) 
    
  // }

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
          <Route exact path='/select-hour' element={<HourSelection/>} />
          <Route exact path='/appointment-confirmation' element={<AppointmentConfirmation/>} />
          {/* <Route exact path='/recentcard' element={<RecentCard/>} />
          <Route exact path='/datepickerpage' element={<DatePickerPage/>} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
