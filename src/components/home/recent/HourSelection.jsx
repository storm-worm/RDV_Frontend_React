import axios from 'axios';
import React, { useState } from "react"
import Heading from '../../common/Heading';
import './HourSelection.css';


const HourSelection = () => {

  const hours = ['9:00 AM', '9:30 AM','10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM','12:00 PM', '12:30 AM','1:00 PM','1:30 AM', '3:00 PM','3:30 AM', '4:00 PM', '4:30 AM','5:00 PM','5:30 AM'];
  const [selectedHour, setSelectedHour] = useState(null);
  const [displayText, setDisplayText] = useState(null);
  const dates= localStorage.getItem('dates');
  const technicien_id= localStorage.getItem('technicien_id');

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
    localStorage.setItem('heures', hour);
  
    const url = `http://127.0.0.1:8000/api/save_rdv?dates=${dates}&heures=${hour}&technicien_id=${technicien_id}`;
    const res =  axios.post(url)
    .then(res => {
      localStorage.setItem('message',res.data.message)
      console.log(localStorage.getItem('message'))
      window.location.href = '/appointment-confirmation';
    })
    .catch(err => {
      console.log(err);
    });

  }

  return (
    <section className='hero'>
        <div className='container'>
          <Heading subtitle='Select an hour for your appointment' />
          </div>
          <div>
          <table className="center">
          <thead>
        <tr>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
      {hours.map((hour, index) => (
          <td key={index}>
            <th className={hour === selectedHour ? 'selected' : ''}
            onClick={handleHourChange.bind(this, hour)}>
              {hour}
              </th>
          </td>
        ))}
        </tbody>
    </table>
    <div className='container'>
          <Heading title={displayText} />
          </div>
    </div>
      </section>
);
}

export default HourSelection;


