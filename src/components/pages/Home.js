import React, { useEffect } from 'react';
import '../../App.css';
import * as Constants from '../Utils/Constants';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
    <div className='img-container'>
    <Link to='/aboutus' className='home-link'>
    <img src={Constants.AboutUsImg}/></Link>
    <Link to='/services' className='home-link'>
    <img src={Constants.RoofingAndCladdingImg}/></Link>
    <Link to='/services' className='home-link'>
    <img src={Constants.DryliningImg}/></Link>
    <Link to='/services' className='home-link'>
    <img src={Constants.SFSImg}/></Link>
    <Link to='/services' className='home-link'>
    <img src={Constants.BuildingServicesImg}/></Link>
    </div>
    <video src='/videos/video.mp4' autoPlay loop muted/>
    </div>
  );
}

export default Home;
