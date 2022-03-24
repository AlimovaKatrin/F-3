import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const TodoForm = ({ submitHandler }) => {
    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* <input name='title' /> */}
                <TextField name='title' label='Outlined secondary' color='secondary' focused />
                {/* <button type='submit'> Add </button> */}
                <Button type='submit' variant='contained'>
                    Add
                </Button>
            </form>
        </div>
    );
};
