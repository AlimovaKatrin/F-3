import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/userContext';

import { Grid, IconButton, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';

export const Info = ({ basket, favorites }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const navigateToCreatePage = () => {
        navigate('product/create');
    };

    const navigateToEditPage = () => {
        navigate('user/edit');
    };

    return (
        <div className='info'>
            <Grid container flexDirection='row' maxWidth={{ sm: 300 }}>
                <Grid item container spacing={3} alignItems='center'>
                    <Grid item>
                        <IconButton onClick={navigateToCreatePage}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Chip icon={<FavoriteIcon />} label={favorites.length} color='info' variant='outlined' />
                    </Grid>
                    <Grid item>
                        <Chip icon={<DeleteIcon />} label={basket.length} color='info' variant='outlined' />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Chip icon={<FaceIcon />} onClick={navigateToEditPage} label={user?.name} color='info' variant='outlined' />
                </Grid>
            </Grid>
        </div>
    );
};
