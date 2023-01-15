import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { list } from "../../data/Data"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css'



const RecentCard = () => {

  const [res, setData] = useState([]);
  const location = useLocation();

  // const [showCalendar, setShowCalendar] = useState(false);
  const [dates, setSelectedDate] = useState(new Date());
  // const [selectedCard, setSelectedCard] = useState(null);


const handleDateChange = (date, technicien_id) => {
    const dateString = date.toISOString().slice(0, 10);
    setSelectedDate(dateString);
    localStorage.setItem('dates', dateString);
    localStorage.setItem('technicien_id', technicien_id);
    window.location.href = '/select-hour';
  }

  
  // const [isOpen, setIsOpen] = useState(false);
  // const [isIcon, setIsIcon] = useState(false);
  const [state, setState] = useState({});






  useEffect(() => {

    if (location.state && location.state.data && location.state.data[0].data.length > 0) {
      console.log("here is the data from the search")
      console.log(location.state.data[0].data)
      console.log("here is the end of ex data")
      setData(location.state.data[0].data);
      
    }
    
    else {
      
        axios
          .get("http://127.0.0.1:8000/api/technicien")
          .then(res => {
            setData(res.data[0].data);
            console.log(res)
          })
          .catch(err => {
            console.log(err);
          });

    }

  }, [location.state]);


  return ( 
    <>
       {location.state && location.state.data && location.state.data[0].data.length === 0 ? <p>There is no service with that name in this city</p> :
       <div className='content grid3 mtop'>
        {res.map((item, index) => {
          return (
            <div className='box shadow'>
              <div className='img'>
                <img src="../images/list/p-1.png" alt='' />
              </div>
              <div className='text'>
                <h4>{item.service['service_lib']}  {item.user['nom']}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {item.succursale['succursale_lib']}
                </p>
              </div>
              <div className='button flex'>
                <div>


                  <button className='btn2' onClick={() => {
                    setState({ ...state, [index]: { isIcon: !state[index]?.isIcon } });
                  }}>
                    Take appointment
                  </button>
                  {state[index]?.isIcon && (
                    <div className='icon' onClick={() => {
                      setState({ ...state, [index]: { isOpen: !state[index]?.isOpen } });
                    }}>
                      <i className="fa fa-calendar"></i>
                    </div>
                  )}
                  {state[index]?.isOpen && (

                    <DatePicker
                      inline
                      // showYearDropdown={false}
                      // showMonthDropdown={false}

                      selected={dates}
                      //onChange={date => setSelectedDate(date)}
                      onChange={(date) => handleDateChange(date, item.id)}
                    >
                    </DatePicker>
                  )}

               
               
               
                </div>
              </div>
            </div>
          )
        })}  
      </div> 
      }
    </>
  )

      
}


export default RecentCard