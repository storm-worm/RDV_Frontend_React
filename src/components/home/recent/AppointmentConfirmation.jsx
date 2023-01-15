import React, { useState } from "react"
import Heading from '../../common/Heading';



const AppointmentConfirmation = () => {
    const selectedHour = localStorage.getItem("selectedHour");
    const selectedDate = localStorage.getItem("selectedDate");

  return (
    <section className='hero'>
        <div className='container'>
          <Heading title='Appointment Confirmation' subtitle='You have selected your appointment date succesfully' />
          <br></br>
          <br></br>

          <p>Selected Hour: {selectedHour}</p>
          <p>Selected Date: {selectedDate}</p>
          </div>
      </section>
  );
}

export default AppointmentConfirmation;