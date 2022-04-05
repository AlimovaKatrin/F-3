import React, { useState } from 'react';
import style from './style.module.css';

export const Header = ({ changeList }) => {
    const [inputValue, setIntputValue] = useState('');

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        changeList((prevList) => {
            return prevList.filter(({ name }) => name.includes(value));
        });
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.logoContainer}>logo</div>
            <div className={style.searchContainer}>
                <input onChange={handleChange} />
            </div>
            <div className={style.restButtonsContainer}>rest buttons</div>
        </div>
    );
};
