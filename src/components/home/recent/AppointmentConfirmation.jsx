import React, { useState } from "react"
import Heading from '../../common/Heading';



const AppointmentConfirmation = () => {
  const dates= localStorage.getItem('dates');
  const heures= localStorage.getItem('heures');
  const message= localStorage.getItem('message');

  return (
    <section className='hero'>
        <div className='container'>
          <Heading title='Appointment Confirmation' subtitle={message} />
          <br></br>
          <br></br>

          <p>Selected Hour: {heures}</p>
          <p>Selected Date: {dates}</p>
          </div>
      </section>
  );
}

export default AppointmentConfirmation;