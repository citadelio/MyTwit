import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Action from '../Actions/Action';
import HomeParallax from '../HomeParallax/HomeParallax';
import Footer from '../Footer/Footer';
export default (props) => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Action/>
      <HomeParallax/>
      <Footer/>
    </div>
  )
}
