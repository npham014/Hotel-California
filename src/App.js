import NavBar from "./components/NavBar/NavBar"
import './App.scss';
import React from 'react';
import Intro from "./components/Intro/Intro"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
