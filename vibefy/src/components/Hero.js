import React from 'react';
import './Hero.css';

import video from '../../src/assets/videos/video-1.mp4';
function Hero() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1><i>Discover The Excitement With Us</i></h1> 
    </div>
  );
}

export default Hero;
