import React from 'react';
import ListItem from '@mui/material/ListItem';

export const TodoCard = ({ todo }) => {
    return (
        <ListItem>
            <h3>{todo.title}</h3>
        </ListItem>
    );
};
