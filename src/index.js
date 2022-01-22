import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, Routes, Route} from "react-router-dom";
import Reservation from "./components/Reservation/Reservation";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";

ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="reservation" element={<Reservation/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<p>404 Error: Not Found</p>}/>
      </Routes>
    </HashRouter>,
  document.getElementById('root')
);

