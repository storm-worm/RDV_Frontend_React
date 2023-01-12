import React from "react"
import Heading2 from "../../common/Heading2"
import "./hero.css"

const Herofirst = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading2 title='Welcome UserName, Search Your Appointment ' subtitle='Find appointment located in your local city.' />

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

export default Herofirst
