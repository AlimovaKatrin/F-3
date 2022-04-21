import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const Info = ({ basket, favorites, name }) => {
    const navigate = useNavigate();

    const navigateToCreatePage = () => {
        navigate('product/create');
    };
    
    return (
        <div>
            <Grid container flexDirection='column'>
                <Grid item> ЛАЙКИ {favorites.length} </Grid>
                <Grid item> КОРЗИНА {basket.length}</Grid>
                <Grid item> ИМЯ ЮЗЕРА {name} </Grid>
                <Grid item>
                    <IconButton onClick={navigateToCreatePage}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
};
