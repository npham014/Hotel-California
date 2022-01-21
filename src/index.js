import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Reservation from "./components/Reservation/Reservation"

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="reservation" element={<Reservation/>}/>
        </Route>
        <Route path="*" element={<p>404 Error: Not Found</p>}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

