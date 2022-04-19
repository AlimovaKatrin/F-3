import React from 'react';
import { useState } from 'react';

import style from './style.module.css';
import './styleCommon.css';
// import cn from 'classnames';

const Button = () => {
    const [isColorfull, setColorfull] = useState(false);
    
    const handleClick = () => {
        setColorfull((prevState) => !prevState);
    };

    console.log('без отрицания ',isColorfull);
    console.log('с отрицанием', !isColorfull);
    return <button className={
        cn('smallHeader',{
            [style.green] : isColorfull,
            [style.red]: !isColorfull
        })
    } onClick={handleClick}>Change color</button>;
};

export const Styles = () => {
    const stylesObj = {
        backgroundColor: 'red',
        width: '1000px',
    };
    console.log(style);
    return (
        <div className={cn(style.basic, 'header')}>
            <div style={stylesObj}>I AM RED DIV !!</div>
            <Button />
        </div>
    );
};
