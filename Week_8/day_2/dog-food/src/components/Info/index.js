import React from 'react';

export const Info = ({ basket, favorites, name }) => {
    return (
        <div>
            <div> ЛАЙКИ {favorites.length} </div>
            <div> КОРЗИНА {basket.length} </div>
            <div> ИМЯ ЮЗЕРА {name} </div>
        </div>
    );
};
