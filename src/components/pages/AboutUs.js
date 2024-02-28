import React,{useState,useEffect} from 'react';
import '../../App.css';
import Cards from '../UI/Cards';
import * as Constants from '../Utils/Constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
  const [CurrentSelection, setCurrentSelection] = useState('');

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return <div className='aboutcontactLayout'>    
      <br></br>
    <h1 data-aos="fade-left" className='vision'>{Constants.WhoWeAreTitle}</h1>
    <br></br>
    <div className='aboutusStatement' data-aos="fade-right">
      <span>{Constants.WhoWeAreStatement}</span>
    </div>
    <h1 data-aos="fade-left" className='vision'>{Constants.VisionTitle}</h1>
    <br></br>
    <div className='aboutusStatement' data-aos="fade-right">
      <span>{Constants.VisionStatement}</span>
    </div>
    <h1 data-aos="fade-left" className='vision'>{Constants.OurCoreValuesTitle}</h1>
    <div data-aos="zoom-in">
      <img src='/images/History&Vision.png'/>
    </div>
    <div data-aos="fade-right" className='Linkedin'>
      {/* <iframe width="911" height="315" src= {Constants.YouTubeSource} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>   */}
      <iframe src= {Constants.LinkedInPage} frameborder='0' width="911" height="315"></iframe>
    </div>
    <br></br>
    {/* <div data-aos="fade-right">
      <img src={Constants.OrgChartImg}/>    
    </div>
    <br></br> */}
    <h1 data-aos="fade-left" className='vision'>{Constants.OurClientsTitle}</h1>
    <br></br>
    <div data-aos="zoom-in">
    <Cards
      sendToParent={setCurrentSelection}
      cards={Constants.ClientCards}
    /></div>
    <br></br>
    <h1 data-aos="fade-left" className='vision'>{Constants.OurCharityPartnerTitle}</h1>
    <br></br>
    <div className='disable-mouse-pointer' data-aos="zoom-in">
    <Cards
      sendToParent={setCurrentSelection}
      cards={Constants.CharityPartnerCards}
    /></div>
  </div>;
}
