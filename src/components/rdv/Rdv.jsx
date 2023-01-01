import React from "react"
//import img from "../images/services.jpg"
import Back from "../common/Back"
import Heading from "../common/Heading"
import "../home/hero/hero.css"

const Rdv = () => {
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
        </div>
      </section>
    </>
  )
}

export default Rdv