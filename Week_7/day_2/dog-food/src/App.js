import React, { useEffect, useState } from 'react';

import mockedData from '../data.json';
import api from './utils/api';

import Logo from './components/Logo';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Search } from './components/Search';
import { PracticeContainer } from './practice/PracticeContainer';

import './index.css';

export const App = () => {
    const [foodList, setFoodList] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setInputValue(value);
    };

    const filterFoodList = (inputValue) => {
        const filteredList = foodList?.filter(({ name }) => name.includes(inputValue));
        setFoodList(filteredList);
    };

    useEffect(() => {
        api.getProducts()
            .then((res) => res.json())
            .then(({ products }) => setFoodList(products))
            .catch((err) => err.message);
    }, []);

    useEffect(() => {
        filterFoodList(inputValue);
    }, [inputValue]);

    return (
        <div className='appContainer'>
            <Header>
                <Logo />
                <Search handleChange={handleChange} />
            </Header>
            <div className='content container'>
                <div className='content__cards'>
                    <List list={foodList} />
                </div>
            </div>
            <Footer />
            {/* <PracticeContainer /> */}
        </div>
    );
};
