import React from 'react';
import NavBar from "../NavBar/NavBar";
import './About.scss';
import Footer from "../Footer/Footer"

function About() {
  return(
    <div>
      <NavBar/>
      <div className='about'>
        <div><h1>About</h1></div>
        <div><p>You can check out any time you like, but you can never leave!</p></div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
