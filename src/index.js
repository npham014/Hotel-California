import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Reservation from "./components/Reservation/Reservation";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="reservation" element={<Reservation/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<p>404 Error: Not Found</p>}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

