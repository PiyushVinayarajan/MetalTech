import React from 'react';
import Navbar from './components/Navigation/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Scroll from './components/UI/ScrollToTop';

function App() {  
  return (
    <div>
      <Router>
        <Scroll/>        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/aboutus' component={AboutUs} />
        </Switch>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
