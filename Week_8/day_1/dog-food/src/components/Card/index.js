import React from 'react';
import { Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export const Card = ({ itemFood, isInBasket, setBasket }) => {
    const writeLS = () => {
        const basket = JSON.parse(localStorage.getItem('basket')) || [];
        basket.push(itemFood._id);
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    const removeLS = () => {
        const basket = JSON.parse(localStorage.getItem('basket'));
        const filteredBasket = basket.filter((itemID) => itemFood._id !== itemID);
        localStorage.setItem('basket', JSON.stringify(filteredBasket));
    };

    const addItem = () => {
        writeLS();
        setBasket((prevState) => [...prevState, itemFood._id]);
    };

    const removeItem = () => {
        removeLS();
        setBasket((prevState) => prevState.filter((itemID) => itemFood._id !== itemID));
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
                </CardActions>
            </CardMUI>
        </ThemeProvider>
    );
};
