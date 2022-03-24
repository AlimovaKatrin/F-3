import React from 'react';
import { TodoCard } from '../TodoCard';
import List from '@mui/material/List';

export const TodoList = ({ list }) => {
    return (
        <List>
            {list.map((el) => (
                <TodoCard key={el.id} todo={el} />
            ))}
        </List>
    );
};
