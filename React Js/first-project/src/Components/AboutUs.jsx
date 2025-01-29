import React from 'react'
import Footer from './Footer'
import Image from '../assets/react.svg';

export default function AboutUs() {

    var name = "Welcome to About Us Page";
    var status = 0;

  return (
    <div>
      <img src={ Image } />


        {/* { (status == 1) ? 'Welcome to About Us Page' : '' } */}
        
        { (status == 1) ? name : '' }

      {/* { name } */}

      <div style={{ 'display' : `${ (status == 0) ? 'none' : '' }` }}>
        Hello
      </div>
      <Footer/>
    </div>
  )
}
