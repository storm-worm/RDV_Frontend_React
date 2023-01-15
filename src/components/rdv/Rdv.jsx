import axios from 'axios';
import React, { useState, useEffect } from "react";
//import img from "../images/services.jpg"
import Back from "../common/Back"
//import Heading from "../common/Heading"
import "../home/hero/hero.css"
//import {Routes, Route, useNavigate} from 'react-router-dom';
// import Search from "../search/Search"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
//import Heading from "../common/Heading"
import { useNavigate  } from "react-router-dom";

export default function Rdv() {

  
  const [city, setCity] = useState('')
  const [service, setService] = useState('')
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();
  const [res, setData] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if(city != '' && service!= ''){
        const url = `http://127.0.0.1:8000/api/search?city=${city}&service=${service}`;
        const res = await axios.post(url);
        console.log("Data from the server: ", res.data);
        setResponseData(res.data)
      }
      
      else{

        axios
        .get("http://127.0.0.1:8000/api/technicien")
        .then(res => {
          setResponseData(res.data);
          console.log("fucking prob here")
          console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        });
      }
    
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => {
    if (responseData) {
      navigate('/rdv', {state: { data: responseData }});
    }
  }, [responseData, navigate])



  return (
    <>
    
      <section className='hero'>
      <Back name='Rdv' title='Take Appointment'  />
        <div className='container'>
          <form className='flex' onSubmit={handleSubmit}>
            <div className='box'>
              <span>City</span>
              <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)}/>
            </div>
            <div className='box'>
              <span>Service</span>
              <input type="text" name="service" value={service} onChange={e => setService(e.target.value)}/>
            </div>
          
            <button className='btn1' type="submit">
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