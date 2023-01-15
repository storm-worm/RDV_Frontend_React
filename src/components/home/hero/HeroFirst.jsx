import Heading2 from "../../common/Heading2"
import AuthUser from '../../auth/AuthUser'
import "./hero.css"
import React from "react";


const Herofirst = () => {


  const {getUser, token,logout, http} = AuthUser();
  // const logoutUser = () => {
  //   if(token != undefined){
  //     logout();
  //     http.post('/logout')
  //   }
  // }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading2 title={`Welcome ${getUser().name}, Search Your Appointment`} subtitle='Find appointment located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City</span>
              <input type="text" name="city" />
            </div>
            <div className='box'>
              <span>Service</span>
              <input type="text" name="service"/>
            </div>
          
            <button className='btn1' type="submit">
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Herofirst
