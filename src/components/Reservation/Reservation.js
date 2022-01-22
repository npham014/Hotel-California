import React, {useState} from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Reservation.scss";
function Reservation() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation Submitted for: ' + name); //In a real system this would go somwhere, probably a nosql database
  }

  return <div>
    <NavBar/>
    <div className="reservation--form--container">
      <div><h1>Book Your Trip:</h1></div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange}></input>
        </label>
        <input type="submit" value="submit" className="sub--btn"/>
      </form>
    </div>
    <Footer/>
  </div>;
}

export default Reservation;
