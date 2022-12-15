import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MySection.css';

function HeroSection() {
  return (
    <div className='mycontainer'>
      <h1>RENDEZ VOUS EN LIGNE</h1>
      <p>Prenez votre rendez vous en fonction du service et la ville</p>
      <div className='mysection-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Prendre rendez-vous
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          login <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MySection;