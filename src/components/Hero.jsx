import React from "react"
import Heading from "./Heading"
import "./hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Appointment ' subtitle='Find appointment located in your local city.' />

          <form className='flex'>
            <div className='box'>
            </div>
            <div className='box'>
              <span>Technicien</span>
              <input type='text'  />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
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

export default Hero
