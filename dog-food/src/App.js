import React, { useEffect, useReducer, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './index.css';

import Logo from './components/Logo';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Search } from './components/Search';
import { Item } from './components/Item';
import { CreateItem } from './components/CreateItem';
import { EditItem } from './components/EditItem';
import { PracticeContainer } from './practice/PracticeContainer';
import { Info } from './components/Info';
import Modal from './components/Modal';
import { FormModal } from './components/FormModal';

import GlobalContext from './contexts/globalContext';
import ModalContext from './contexts/modalContext';
import FormModalContext from './contexts/formModalContext';

import { useApi } from './hooks/useApi';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { EditUser } from './components/EditUser';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Button } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fed700;',
        },
        secondary: {
            main: '#FF0000',
        },
        info: {
            main: '#212121',
        },
    },
});

function reducer(state, action) {
    switch (action?.type) {
        case 'add user':
            return {
                ...state,
                user: action.payload
            }
        case 'remove user':
            return {
                ...state,
                user: null
            }
        case 'edit user':
            return {
                ...state,
                user: action.payload
            }
        case 'open modal':
            return {
                ...state,
                modalState: {
                    isOpen: true,
                    msg: action.payload
                }
            }
        case 'close modal':
            return {
                ...state,
                modalState: {
                    isOpen: false,
                    msg: null
                }
            }
        case 'open form':
            return {
                ...state,
                modalFormState: {
                    isOpen: true,
                }
            }
        case 'close form':
            return {
                ...state,
                modalFormState: {
                    isOpen: false,
                }
            }
        default:
            return { ...state }
    }
}

export const App = () => {
    const api = useApi();
    const { readLS } = useLocalStorage();

    const [complicatedState, dispatch] = useReducer(reducer, {
        user: null,
        modalState: {
            isOpen: false,
            msg: null,
        },
        modalFormState: {
            isOpen: false,
            msg: null,
        }
    });

    const [foodList, setFoodList] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [basket, setBasket] = useState(readLS('basket') || []);
    const [favorites, setFavorites] = useState(readLS('favorites') || []);
    const [user, setUser] = useState(null);
    // const [modalState, setModalState] = useState({
    //     isOpen: false,
    //     msg: null,
    // });
    const [modalFormState, setModalFormState] = useState({
        isOpen: false,
        msg: null,
    });

    const handleChangeSearchInput = (value) => {
        setSearchQuery(value);
    };

    useEffect(() => {
        const token = readLS('token');
        if (!token) {
            setModalFormState(() => {
                return {
                    isOpen: true,
                    msg: 'Вы не авторизированы',
                };
            });
        }
    }, []);

    useEffect(() => {
        api.getCurentUser().then((user) => setUser(user));
    }, []);

    useEffect(() => {
        api.search(searchQuery).then((list) => setFoodList(list));
    }, [searchQuery, user]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalContext.Provider value={{ complicatedState, dispatch, user, setUser, modalFormState, setModalFormState }}>
                {/* <ModalContext.Provider value={{ modalState, setModalState }}>
                    <FormModalContext.Provider value={{ modalFormState, setModalFormState }}> */}
                <Modal />
                <FormModal />
                <div className='appContainer'>
                    <Button onClick={() => dispatch({ type: 'add user', payload: 'HOLA' })}>TEST REDUCER</Button>
                    <pre>{JSON.stringify(complicatedState, null, 4)}</pre>
                    <Header>
                        <Logo />
                        <Search setQuery={handleChangeSearchInput} />
                        <Info basket={basket} favorites={favorites} />
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
                            <Route path='product/:itemID' element={<Item changeList={setFoodList} />} />
                            <Route path='product/:itemID/edit' element={<EditItem />} />
                            <Route path='product/create' element={<CreateItem changeList={setFoodList} />} />
                            <Route path='user/edit' element={<EditUser />} />
                            <Route path='about' element={<div>PAGE ABOUT</div>} />
                        </Routes>
                    </div>
                    <Footer />
                    {/* <PracticeContainer /> */}
                </div>
                {/* </FormModalContext.Provider>
                </ModalContext.Provider> */}
            </GlobalContext.Provider>
        </ThemeProvider>
    );
};
