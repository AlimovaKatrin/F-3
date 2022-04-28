import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../utils/api';

import { TextField, Grid, Button, Typography } from '@mui/material';

export const CreateItem = ({ changeList }) => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const {
            target: { inputName, inputDescription, inputPrice },
        } = event;
        // name.value === event.target.name.value
        api.addProduct({
            name: inputName.value, // name(ключ объекта) : name.value(обращение к value input из узла дома event target)
            description: inputDescription.value,
            price: inputPrice.value,
        })
            .then((data) => {
                changeList((prevState) => [data, ...prevState])
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container flexDirection='column' spacing='10'>
                <Grid item>
                    <Typography variant='h3'>Создать товар </Typography>
                </Grid>
                <Grid item>
                    <TextField fullWidth label='Название' name='inputName' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField fullWidth label='Описание товара' name='inputDescription' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField fullWidth label='Цена' name='inputPrice' variant='outlined' />
                </Grid>
                <Grid item>
                    <Button type='submit' variant='contained' color='secondary' size='small'>
                        Добавить товар
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
