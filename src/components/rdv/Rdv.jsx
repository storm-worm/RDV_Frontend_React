import React from "react"
//import img from "../images/services.jpg"
import Back from "../common/Back"
//import Heading from "../common/Heading"
import "../home/hero/hero.css"
import {Routes, Route, useNavigate} from 'react-router-dom';
import Search from "../search/Search"



const Rdv = () => {
const navigate = useNavigate();

const navigateToSearch = () => {
    // 👇️ navigate to /contacts
    navigate('/search');
  };
  return (
    <>
    
      <section className='hero'>
      <Back name='Rdv' title='Take Appointment'  />
        <div className='container'>
          <form className='flex'>
            <div className='box'>
              <span>City</span>
              <input type='text'  />
            </div>
            <div className='box'>
              <span>Technicien</span>
              <input type='text'  />
            </div>
            <button className='btn1' onClick={navigateToSearch}>
              <i className='fa fa-search'></i>
            </button>
          </form>
          <Routes>
          <Route path="/search" element={<Search/>} />
        </Routes>
        </div>
      </section>
    </>
  )
}

export default Rdv