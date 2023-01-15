import React from "react"
//import Awards from "./awards/Awards"
//import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import HeroFirst from "./hero/HeroFirst"
//import HeroFirst from "./hero/HeroFirst"
//import Location from "./location/Location"
//import Price from "./price/Price"
//import Recent from "./recent/Recent"
//import Team from "./team/Team"
import AuthUser from '../auth/AuthUser'
const Home = () => {
  
  const {token} = AuthUser();
  console.log("token", token);

  if(token == null){
    console.log(1)
    return(
      <>
        <Hero />
      </>
    )
  }
  else{
    console.log(2);
    return(
      <>
        <HeroFirst />
      </>
    )
  }

 
}

export default Home
