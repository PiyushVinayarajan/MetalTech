import React, { useState } from 'react';
// import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as Constants from '../Utils/Constants';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* Metal TECH */}
            {/* <i className='fab fa-typo3' /> */}
            <img src={Constants.CompanyLogo}/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className='mobile-navbar'>
      <Link to='/' className='nav-links'>
              <img width="50" height="50" src="https://img.icons8.com/doodle/50/building--v1.png" alt="building--v1"/>
              </Link>
        <div className='navbar-container'>
              <Link
                to='/services'
                className='nav-links'
              >
              <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/service--v1.png" alt="service--v1"/>
              </Link>
              <Link
                to='/projects'
                className='nav-links'
              >
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/20/flipboard.png" alt="flipboard"/>
              </Link>
              <Link
                to='/aboutus'
                className='nav-links'
              >
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/20/about.png" alt="about"/>
              </Link>
              <Link
                to='/contactus'
                className='nav-links'
              >
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/20/contact-card.png" alt="contact-card"/>
              </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
