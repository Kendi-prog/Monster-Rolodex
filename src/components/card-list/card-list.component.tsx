import { Component } from 'react';
import Card from '../card/card.components';
import './card-list.styles.css';
import React from 'react';
import { Monster } from '../../App';

type CardListProps = {
    monsters: Monster[];
}

class CardList extends Component<CardListProps> {
    render() {
        const { monsters } = this.props;

        return( 
            
            <div className='card-list'>
                    
                {monsters.map((monster) => { 
                    return (
                        <Card monster={monster} />
                    );      
                })}
            </div>
        )
    }
}

export default CardList;