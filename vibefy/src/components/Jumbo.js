import React, {Component } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Hero from './Hero.js';

class Jumbo extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
      <Hero/>
      </>
    );
  }
}

export default Jumbo;