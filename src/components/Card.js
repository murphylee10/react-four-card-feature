import React from 'react';
import './Card.css'

const Card = ({ colour, heading, sub, icon }) => {
    return (
        <div className={`card ${colour}`}>
            <div className="header">
                <h2>{ heading }</h2>
            </div>
            <div className="subheader">
                <p> { sub } </p>
            </div>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
        </div>
    );
};

export default Card;