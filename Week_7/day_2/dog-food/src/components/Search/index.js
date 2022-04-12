import React from 'react';
import './index.css';
import { ReactComponent as CloseSearch } from '../../../public/assets/svg/ic-close-input.svg';

export const Search = ({ handleChange }) => {
    return (
        <div className='search'>
            <input type='text' placeholder='Поиск' className='search__input' onChange={handleChange} />
            <button className='search__btn'>{<CloseSearch />}</button>
        </div>
    );
};
