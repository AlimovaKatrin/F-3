import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import mockedData from '../data.json';
import api from './utils/api';

import Logo from './components/Logo';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Search } from './components/Search';
import { Item } from './components/Item';
import { CreateItem } from './components/CreateItem';
import { PracticeContainer } from './practice/PracticeContainer';

import './index.css';
import { Info } from './components/Info';

export const App = () => {
    const [foodList, setFoodList] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || []);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [user, setUser] = useState(null);

    const handleChangeSearchInput = (value) => {
        setSearchQuery(value);
    };

    useEffect(() => {
        api.getCurentUser().then((user) => setUser(user));
    }, []);

    useEffect(() => {
        api.search(searchQuery).then((list) => setFoodList(list));
    }, [searchQuery]);

    return (
        <div className='appContainer'>
            <Header>
                <Logo />
                <Search setQuery={handleChangeSearchInput} />
                <Info basket={basket} favorites={favorites} name={user?.name} />
            </Header>
            <div className='content container'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <div className='content__cards'>
                                <List
                                    list={foodList}
                                    basket={basket}
                                    setBasket={setBasket}
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                />
                            </div>
                        }
                    />
                    <Route path='product/:itemID' element={<Item />} />
                    <Route path='product/create' element={<CreateItem/>} />
                    <Route path='about' element={<div>PAGE ABOUT</div>} />
                </Routes>
            </div>
            <Footer />
            {/* <PracticeContainer /> */}
        </div>
    );
};
