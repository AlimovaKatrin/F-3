import React, { useEffect, useState } from 'react';
import './index.css';
import { ReactComponent as CloseSearch } from '../../../public/assets/svg/ic-close-input.svg';

export const Search = ({ setQuery }) => {
    const [searchText, setSearchText] = useState(''); // локальный стейт для <input/>
    useEffect(() => {
        setQuery(searchText);
    }, [searchText]); // он будет следить за инпутом и п
    // ередавать в App js данные при помощи функции handleChange

    const handleClick = () => {
        setSearchText('');
    }; // очищение инпута + очищение стейта

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Поиск'
                className='search__input'
                value={searchText} // жестко зафиксировали значение value у инпута
                onChange={handleChange} // на каждое измение устанавливаем searchText
            />
            <button className='search__btn'>{searchText && <CloseSearch onClick={handleClick} />}</button>
        </div>
    );
};
