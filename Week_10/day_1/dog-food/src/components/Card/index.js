import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../utils/api';
import './index.css';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import { Grid, Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const Card = ({ itemFood, isInBasket, setBasket, isInFavorites, setFavorites }) => {
    const { writeLS, removeLS } = useLocalStorage();

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
        <CardMUI className='card'>
            <CardMedia component='img' image={itemFood.pictures} alt={itemFood.name} />
            {/* <Grid container flexDirection='column' justifyContent='space-around'> */}
            {/* <Grid item> */}
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {itemFood.price}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    <Link to={`product/${itemFood._id}`}>{itemFood.name}</Link>
                </Typography>
            </CardContent>
            {/* </Grid> */}
            {/* <Grid item> */}
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
            {/* </Grid> */}
            {/* </Grid> */}
        </CardMUI>
    );
};
