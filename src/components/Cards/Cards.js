import React from 'react';
import CardItem from "../CardItem/CardItem"
import "./Cards.scss";
function Cards() {
  return (
    <div className="cards">
        <h1>More at the Hotel California Blog:</h1>
        <div className="cards--container">
            <div className="cards--items--wrapper">
                <ul className="cards--items">
                    <CardItem
                        src="images/beach_family.jfif"
                        text="Any time of year, you can find me here!"
                        label="Testimonial"
                        path="/blog"
                    />
                    <CardItem
                        src="images/pink_champagne.jfif"
                        text="Introducing Our New Wine Collection"
                        label="Announcement"
                        path="/blog"
                    />                    
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Cards;
