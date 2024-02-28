import React, { useState, useEffect } from 'react';
import '../../App.css';
import * as Constants from '../Utils/Constants';
import Cards from '../UI/Cards';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUs() {
  const [CurrentSelection, setCurrentSelection] = useState('');

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (<div className='aboutcontactLayout'>
    <br></br>
<h1 data-aos="fade-left" className='vision'>Find Us</h1>
    <br></br>
    <iframe src= {Constants.GoogleMapAPI} width="95%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <ul>{Constants.OfficeAddress}</ul>
    <br></br>
    <h2><p data-aos="zoom-in"><a href={Constants.EmailTo}>Send us email</a> OR Tel: {Constants.PhoneNumber}</p></h2>
    <br></br>
    <h1 data-aos="fade-left" className='vision'>Want to Join us?</h1>
    <br></br>
    <div data-aos="fade-right" className='Linkedin'>
    <iframe src={Constants.LinkedInJob} frameborder='0' width="911" height="315" allowfullscreen="" ></iframe>
    </div>
    <br></br>
    <br></br>
  </div>
  );
}
