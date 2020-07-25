import React from 'react';
import './card.css';

function Card (props) {
  return (
    <div className="card-container">
      <img alt="monsters" src={`https://robohash.org/${props.monsterId}?set=set2&size=180x180`}/>
      <h2>{props.monster.name}</h2>      
      <p>{props.monster.email}</p>
    </div>
  )
}

export default Card;