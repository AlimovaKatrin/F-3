import React from 'react';
import { Card } from '../Card';

export const List = ({ list }) => {
    return (
        <>
            {list.map((item, i) => (
                <Card key={i} itemFood={item} />
            ))}
        </>
    );
};
