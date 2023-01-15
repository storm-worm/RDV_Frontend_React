import React from "react"
import Heading2 from "../../common/Heading2"
import AuthUser from '../../auth/AuthUser'
import "./hero.css"


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
};

export default Herofirst
