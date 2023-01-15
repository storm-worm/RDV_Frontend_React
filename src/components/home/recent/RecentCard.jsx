import React, { useState } from "react"
import { list } from "../../data/Data"
//import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css'


const RecentCard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCard, setSelectedCard] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem('selectedDate', date);
    window.location.href = '/select-hour';
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isIcon, setIsIcon] = useState(false);
  const [state, setState] = useState({});






  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, location, name, price } = val
          const isSelectedCard = index === selectedCard;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>

                  {/* <Link to ={{pathname : '/datepickerpage', state: { startDate }
                    }}>
                  <button className='btn2'>{price} </button>
                  </Link> */}

                  {/* <button className='btn2' onClick={() => setShowCalendar(!showCalendar)}>
                    {showCalendar ? 'Hide Calendar' : 'Take appointment'}
                  </button> */}
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

                      selected={selectedDate}
                      //onChange={date => setSelectedDate(date)}
                      onChange={handleDateChange}
                    >
                    </DatePicker>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard