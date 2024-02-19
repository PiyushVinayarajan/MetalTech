import React, { useState, useEffect } from 'react';
import '../../App.css';
import SmallSlider from '../UI/SmallSlider';
import * as Constants from '../Utils/Constants';
import { useHistory } from 'react-router-dom';
import Cards from '../UI/Cards';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  const [CurrentSelection, setCurrentSelection] = useState('');
  let history = useHistory();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setCurrentSelection(params.get('tag'));
    history.replace({
      search: String.empty,
    });
  }, []);

  useEffect(() => {
    if (CurrentSelection != '' && CurrentSelection != null) {
      document.getElementById(CurrentSelection).scrollIntoView();
    }
  });

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <div className='dialouge'>
      <div data-aos="zoom-in">
      <Cards
        sendToParent={setCurrentSelection}
        cards={Constants.ProjectRow1Cards}
      />
      <Cards
        sendToParent={setCurrentSelection}
        cards={Constants.ProjectRow2Cards}
      />
      </div>      
      <div>
        <br id="Project-1"></br>
        <h1 data-aos="fade-right" id="Service-1"><u>{Constants.Project1CarouselImages.at(0).key}</u></h1>
        <br></br>
        <div data-aos="zoom-in">
        <SmallSlider
          infiniteLoop={true}
          autoPlay={true}
          useKeyboardArrows={true}
          showStatus={false}
          showThumbs={true}
          showIndicators={true}
          images={Constants.Project1CarouselImages}
        /></div>
        <br></br>
        <h3><p data-aos="fade-left" className='projectdialouge'>
        {Constants.Project1CarouselImages.at(0).subtext1}
          <br></br>
          {Constants.Project1CarouselImages.at(0).subtext2}
          <br></br>
          {Constants.Project1CarouselImages.at(0).subtext3}
          </p><br />
        </h3>
        <br></br>
        <br id="Project-2"></br>
        <h1 data-aos="fade-left" id="Service-2"><u>{Constants.Project2CarouselImages.at(0).key}</u></h1>
        <br></br><div data-aos="zoom-in">
        <SmallSlider
          infiniteLoop={true}
          autoPlay={true}
          useKeyboardArrows={true}
          showStatus={false}
          showThumbs={true}
          showIndicators={true}
          images={Constants.Project2CarouselImages}
        /></div>
        <br></br>
        <h3><p data-aos="fade-left" className='projectdialouge'>
        {Constants.Project2CarouselImages.at(0).subtext1}
          <br></br>
          {Constants.Project2CarouselImages.at(0).subtext2}
          <br></br>
          {Constants.Project2CarouselImages.at(0).subtext3}
          </p><br />
        </h3>
        <br></br>
        <br id="Project-3"></br>
        <h1 data-aos="fade-right" id="Service-3"><u>{Constants.Project3CarouselImages.at(0).key}</u></h1>
        <br></br><div data-aos="zoom-in">
        <SmallSlider
          infiniteLoop={true}
          autoPlay={true}
          useKeyboardArrows={true}
          showStatus={false}
          showThumbs={true}
          showIndicators={true}
          images={Constants.Project3CarouselImages}
        /></div>
        <br></br>
        <h3><p data-aos="fade-left" className='projectdialouge'>
        {Constants.Project3CarouselImages.at(0).subtext1}
          <br></br>
          {Constants.Project3CarouselImages.at(0).subtext2}
          <br></br>
          {Constants.Project3CarouselImages.at(0).subtext3}
          </p><br />
        </h3>
        <br></br>
        <br id="Project-4"></br>
        <h1 data-aos="fade-left" id="Service-4"><u>{Constants.Project4CarouselImages.at(0).key}</u></h1>
        <br></br><div data-aos="zoom-in">
        <SmallSlider
          infiniteLoop={true}
          autoPlay={true}
          useKeyboardArrows={true}
          showStatus={false}
          showThumbs={true}
          showIndicators={true}
          images={Constants.Project4CarouselImages}
        /></div>
        <br></br>
        <h3><p data-aos="fade-left" className='projectdialouge'>
        {Constants.Project4CarouselImages.at(0).subtext1}
          <br></br>
          {Constants.Project4CarouselImages.at(0).subtext2}
          <br></br>
          {Constants.Project4CarouselImages.at(0).subtext3}
          </p><br />
        </h3>
        <br></br>
      </div>
    </div>
  );
}
