import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
            </div>
            <button className='btn5'>Contact Us </button>
          </div>
        </div>
      </section>

      <div className='legal'>
        <span>© 2022.</span>
      </div>
    </>
  )
}

export default Footer
