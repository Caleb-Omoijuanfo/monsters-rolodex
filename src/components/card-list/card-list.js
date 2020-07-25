import React from 'react';
import './card-list.css';
import Card from '../card/card';

function CardList (props) {
    return (
        <div className="card-list">
          {
            props.monsters.map((monster, index) => (
                <Card 
                  key={index}
                  monster={monster}
                  monsterId={index}
                />
            ))
          }
        </div>
    )
}

export default CardList;