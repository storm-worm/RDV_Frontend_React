import React from "react"
//import img from "../images/services.jpg"
import Back from "../common/Back"
//import Heading from "../common/Heading"
import "../home/hero/hero.css"
//import {Routes, Route, useNavigate} from 'react-router-dom';
// import Search from "../search/Search"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
//import Heading from "../common/Heading"

export default function Rdv() {
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
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
          {/* <div className='container'>
          <RecentCard />
        </div> */}
        </div>
      </section>
       <section className='recent padding'>
        <div className='container'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}