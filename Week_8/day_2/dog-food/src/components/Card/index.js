import React from 'react';

import api from '../../utils/api';

import { Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fed700;',
        },
        secondary: {
            main: '#FF0000',
        },
    },
});

export const Card = ({ itemFood, isInBasket, setBasket, isInFavorites, setFavorites }) => {
    const writeLS = (key, value) => {
        const storage = JSON.parse(localStorage.getItem(key)) || [];
        storage.push(value);
        localStorage.setItem(key, JSON.stringify(storage));
    };

    const removeLS = (key, value) => {
        const storage = JSON.parse(localStorage.getItem(key));
        const filteredStorage = storage.filter((itemID) => value !== itemID);
        localStorage.setItem(key, JSON.stringify(filteredStorage));
    };

    const addItem = () => {
        writeLS('basket', itemFood._id);
        setBasket((prevState) => [...prevState, itemFood._id]);
    };

    const removeItem = () => {
        removeLS('basket', itemFood._id);
        setBasket((prevState) => prevState.filter((itemID) => itemFood._id !== itemID));
    };

    const addFavorite = () => {
        writeLS('favorites', itemFood._id);
        setFavorites((prevState) => [...prevState, itemFood._id]);
        api.addLike(itemFood._id)
            .then((addedItem) => {
                alert(`${addedItem.name} добавлен в избраное`);
            })
            .catch(() => {
                alert('Не удалось добавить');
            });
    };

    const removeFavorite = () => {
        removeLS('favorites', itemFood._id);
        setFavorites((prevState) => prevState.filter((itemID) => itemFood._id !== itemID));
        api.deleteLike(itemFood._id)
            .then((removedItem) => {
                alert(`${removedItem.name} удален из избраного`);
            })
            .catch(() => {
                alert('Не удалось удалить');
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <CardMUI sx={{ maxWidth: 345 }}>
                <CardMedia component='img' image={itemFood.pictures} alt={itemFood.name} />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {itemFood.price}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {itemFood.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    {isInBasket ? (
                        <Button onClick={removeItem} variant='contained' color='secondary' size='small'>
                            Убрать из корзины
                        </Button>
                    ) : (
                        <Button onClick={addItem} variant='contained' color='primary' size='small'>
                            В корзину
                        </Button>
                    )}
                    {isInFavorites ? (
                        <IconButton aria-label='add to favorites' onClick={removeFavorite}>
                            <FavoriteIcon />
                        </IconButton>
                    ) : (
                        <IconButton aria-label='add to favorites' onClick={addFavorite}>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                    )}
                    {/* <IconButton aria-label='add to favorites' onClick={isInFavorites ? removeFavorite : addFavorite}>
                        <FavoriteIcon color={isInFavorites ? 'secondary' : 'primary'} />
                    </IconButton> */}
                </CardActions>
            </CardMUI>
        </ThemeProvider>
    );
};
