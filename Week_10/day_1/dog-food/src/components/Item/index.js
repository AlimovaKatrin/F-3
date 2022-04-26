import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Item = ({ changeList }) => {
    const [item, setItem] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const { writeLS } = useLocalStorage();

    const handleClick = () => {
        api.deleteProduct(params.itemID)
            .then((data) => {
                changeList((prevState) => {
                    return prevState.filter((item) => item._id !== params.itemID);
                });
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    const navigateToEditPage = () => {
        navigate(`edit`);
    };

    const addToFavorite = () => {
        writeLS('favorites', params.itemID);
    };

    useEffect(() => {
        api.getProducts(params.itemID)
            .then((data) => setItem(data))
            .catch((err) => alert(err));
    }, []);
    return (
        <>
            {item && (
                <Grid container spacing={2}>
                    <Grid item container xs={6} alignContent='flex-start' spacing={3}>
                        <Grid item xs={12}>
                            <img
                                style={{
                                    maxHeight: 330,
                                    maxWidth: 330,
                                }}
                                src={
                                    'https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFLT3JFRTNMS0wuX0FDX1NMMTUwMF8uanBn.jpg'
                                }
                                alt='picture'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            Цена : {item.price}
                            <IconButton onClick={handleClick}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={navigateToEditPage}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={addToFavorite}>
                                <FavoriteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h3'>{item.name}</Typography>
                        <Typography variant='caption'>{item.wight}</Typography>
                        <Typography variant='subtitle1'>
                            {item.description}
                            What can I do to prevent this in the future? If you are on a personal connection, like at home, you can run an
                            anti-virus scan on your device to make sure it is not infected with malware. If you are at an office or shared
                            network, you can ask the network administrator to run a scan across the network looking for misconfigured or
                            infected devices. Another way to prevent getting this page in the future is to use Privacy Pass. You may need to
                            download version 2.0 now from the Chrome Web Store.What can I do to prevent this in the future? If you are on a
                            personal connection, like at home, you can run an anti-virus scan on your device to make sure it is not infected
                            with malware. If you are at an office or shared network, you can ask the network administrator to run a scan
                            across the network looking for misconfigured or infected devices. Another way to prevent getting this page in
                            the future is to use Privacy Pass. You may need to download version 2.0 now from the Chrome Web Store.What can I
                            do to prevent this in the future? If you are on a personal connection, like at home, you can run an anti-virus
                            scan on your device to make sure it is not infected with malware. If you are at an office or shared network, you
                            can ask the network administrator to run a scan across the network looking for misconfigured or infected
                            devices. Another way to prevent getting this page in the future is to use Privacy Pass. You may need to download
                            version 2.0 now from the Chrome Web Store.What can I do to prevent this in the future? If you are on a personal
                            connection, like at home, you can run an anti-virus scan on your device to make sure it is not infected with
                            malware. If you are at an office or shared network, you can ask the network administrator to run a scan across
                            the network looking for misconfigured or infected devices. Another way to prevent getting this page in the
                            future is to use Privacy Pass. You may need to download version 2.0 now from the Chrome Web Store.
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </>
    );
};
