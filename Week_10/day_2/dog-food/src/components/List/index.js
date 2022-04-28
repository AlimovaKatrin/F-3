import React from 'react';
import { Card } from '../Card';
import './index.css';

export const List = ({ list, basket, setBasket, favorites, setFavorites }) => {
    return (
        <div className='cards'>
            {list?.map((item) => (
                <Card
                    key={item._id}
                    itemFood={item}
                    isInBasket={basket.includes(item._id)}
                    isInFavorites={favorites.includes(item._id)}
                    setBasket={setBasket}
                    setFavorites={setFavorites}
                />
            ))}
        </div>
    );
};
