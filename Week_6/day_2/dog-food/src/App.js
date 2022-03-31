import React, { useState } from 'react';

import mockedData from '../data.json';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { PracticeContainer } from './practice/PracticeContainer';

export const App = () => {
    const [foodList, setFoodList] = useState(mockedData);
    return (
        <div>
            <Header />
            <List list={foodList} />
            <Footer />
            {/* <PracticeContainer /> */}
        </div>
    );
};
