import React from 'react';
import { Card } from '../Card';
import './index.css';

export const List = ({ list, basket, setBasket }) => {
    return (
        <div className='cards'>
            {list?.map((item, i) => (
                <Card key={i} itemFood={item} isInBasket={basket.includes(item._id)} setBasket={setBasket} />
            ))}
        </div>
    );
};
