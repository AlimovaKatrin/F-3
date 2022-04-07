import React from 'react';
import { Card } from '../Card';
import './index.css';

export const List = ({ list }) => {
    return (
        <div className="cards">
            {list?.map((item, i) => (
                <Card key={i} itemFood={item} />
            ))}
        </div>
    );
};
