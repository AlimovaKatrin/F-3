import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

import api from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

export const EditItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDesciption] = useState('');
    const [price, setPrice] = useState('');

    const handleClick = () => {
        api.editProduct(params.itemID, {
            name,
            description,
            price,
        })
            .then((data) => {
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    useEffect(() => {
        api.getProducts(params.itemID).then((data) => {
            setName(data.name);
            setDesciption(data.description);
            setPrice(data.price);
        });
    }, []);

    return (
        <Grid container flexDirection='column' spacing='10'>
            <Grid item>
                <Typography variant='h3'>Редактировать товар </Typography>
            </Grid>
            <Grid item>
                <TextField
                    label='Название'
                    variant='outlined'
                    value={name}
                    onChange={({ target }) => {
                        setName(target.value);
                    }}
                />
            </Grid>
            <Grid item>
                <TextField
                    label='Описание товара'
                    variant='outlined'
                    value={description}
                    onChange={({ target }) => {
                        setDesciption(target.value);
                    }}
                />
            </Grid>
            <Grid item>
                <TextField
                    label='Цена'
                    variant='outlined'
                    value={price}
                    onChange={({ target }) => {
                        setPrice(target.value);
                    }}
                />
            </Grid>
            <Grid item>
                <Button onClick={handleClick} variant='contained' color='secondary' size='small'>
                    Сохранить
                </Button>
            </Grid>
        </Grid>
    );
};
