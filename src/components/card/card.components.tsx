import { Component } from "react";
import React from 'react';
import { Monster } from "../../App";

import './card.styles.css';

type CardProps = {
    monster: Monster
}


class Card extends Component<CardProps> {
    render() {
        const { name, email, id } = this.props.monster;
        return(
            <div className='card-container' key={id}>
                 <img 
                 alt={`monster ${name}`}
                 src={`https://robohash.org/${id}?set=set2&size=180x180`}
                  />
                 <h2>{name}</h2>
                 <p>{email}</p>
            </div>
         ) 
    }
}

export default Card;