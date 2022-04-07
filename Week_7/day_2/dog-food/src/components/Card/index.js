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
    },
});

export const Card = ({ itemFood }) => {
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
                    <Button variant='contained' color='primary' size='small'>
                        В корзину
                    </Button>
                </CardActions>
            </CardMUI>
        </ThemeProvider>
    );
};
