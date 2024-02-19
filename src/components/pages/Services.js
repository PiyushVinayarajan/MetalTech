import React, { useState, useEffect } from 'react';
import '../../App.css';
import Cards from '../UI/Cards';
import * as Constants from '../Utils/Constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services(props) {
  const [CurrentSelection, setCurrentSelection] = useState('');

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  useEffect(() => {
    if (CurrentSelection != '' && CurrentSelection.includes("Service")) {
      document.getElementById(CurrentSelection).scrollIntoView();
    }
  });

  return (
    <div>
      <h1 className='services'></h1>
      <div data-aos="zoom-in">
      <Cards
        sendToParent={setCurrentSelection}
        cards={Constants.ServicesCard}
      /></div>
      <br></br>
      <div className='dialouge'>
        <h1 data-aos="fade-right" id="Service-1"><u>{Constants.ServicesCard.at(0).Key}</u></h1>
        <br></br>
        <h3><p data-aos="fade-left">{Constants.ServicesCard.at(0).desc}</p><br />
        </h3>
        <br></br>
        <div data-aos="zoom-in">
        <Cards
        sendToParent={setCurrentSelection}
        cards={Constants.ProjectsCard1}
      /></div>
        <br></br>
        <h1 data-aos="fade-left" id="Service-2"><u>{Constants.ServicesCard.at(1).Key}</u></h1>
        <br></br>
        <h3><p data-aos="fade-right">{Constants.ServicesCard.at(1).desc}</p><br />
        </h3>
        <br></br>
        <div data-aos="zoom-in">
        <Cards
        sendToParent={setCurrentSelection}
        cards={Constants.ProjectsCard2}
      /></div>
        <br></br>
        <h1 data-aos="fade-right" id="Service-3"><u>{Constants.ServicesCard.at(2).Key}</u></h1>
        <br></br>
        <h3><p data-aos="fade-left">{Constants.ServicesCard.at(2).desc}</p><br />
        </h3>
        <br></br>
        <div data-aos="zoom-in">
        <Cards
        sendToParent={setCurrentSelection}
        cards={Constants.ProjectsCard3}
      /></div>
        <br></br>
        <h1 data-aos="fade-right" id="Service-4"><u>{Constants.ServicesCard.at(3).Key}</u></h1>
        <br></br>
        <h3><p data-aos="fade-right">{Constants.ServicesCard.at(3).desc}</p><br />
        </h3>
        <br></br>
        <div data-aos="zoom-in">
        <Cards
        sendToParent={setCurrentSelection}
        cards={Constants.ProjectsCard4}
      /></div>
      </div>
    </div>
  );
}
