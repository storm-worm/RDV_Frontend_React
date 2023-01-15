import React, { useEffect, useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import AuthUser from "../../auth/AuthUser"

const Header = (props) => {
  const [navList, setNavList] = useState(false)
  const { token, logout, profile, http } = AuthUser();
  const [tkn, setTkn] = useState(token);
  

  const logoutUser = () => {
    if(token !== null){
      logout();
      http.post('/logout', {token: token});
    }
  }
  const profileUser = () => {
    if(token !== null){
      console.log("profile", profile.name, profile.email); }
  }


 if(token === null){
  return (
    <>
     <header>
       <div className='container flex mt-2'>
         <div className='logo'>
           <img src='./images/logoapp.png' alt='' />
         </div>
         <div className='nav1'>
           <ul className={navList ? "small" : "flex"}>
             {nav.map((list, index) => (
               <li key={index}>
                 <Link className="text-decoration-none p-3 btn btn-rounded" to={list.path}>{list.text}</Link>
               </li>
             ))}
           </ul>
         </div>
         <div className='button flex'>
         <Link className="text-white" to="/login">
             <button className='btn btn-success p-3 px-4'>
             <i className='fa fa-sign-in'></i>Sign In
             </button>
         </Link>
         <Link className="text-white" to="/register">
             <button className='btn btn-success p-3 px-4'>
             <i className='fa fa-user-plus'></i>Sign Up
             </button>
         </Link>
           
           {/* <button className='btn btn-success p-3'>
             <i className='fa fa-user-plus'></i> 
             <Link className="text-white" to="/register">
                Sign Up
                </Link>
           </button> */}
         </div>
         <div className='toggle'>
           <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
         </div>
       </div>
     </header>
   </>
 )}else if(token !== null ){
  return (
     <>
      <header>
        <div className='container flex mt-2'>
          <div className='logo'>
            <img src='./images/logoapp.png' alt='' />
          </div>
          <div className='nav1'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link className="text-decoration-none text-white p-3 btn btn-rounded " to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <Link className="text-white" onClick={profileUser}>
              <button className='btn btn-success p-3 px-4'>
              <i className='fa fa-sign-in'></i>
                Profile
              </button>
            </Link>
           
            <Link className="text-white" onClick={logoutUser} to="\login">
              <button className='btn btn-danger p-3 px-4'>
              <i className='fa fa-sign-out'></i>Logout
              </button>
            </Link>
          </div>

          {/* <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div> */}
        </div>
      </header>
    </>
  )}


  
}

export default Header
