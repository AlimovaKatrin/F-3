import { useEffect, useState } from 'react';
import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';
import Grid from '@mui/material/Grid';

export const TodoContainer = () => {
    const [todoListState, setTodoListState] = useState([
        {
            id: 9999,
            title: 'Call granny',
        },
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const {
            target: { title },
        } = event;
        const task = {
            id: Math.random(),
            title: title.value,
        };
        setTodoListState((prevState) => {
            return [task, ...prevState];
        });
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
            .then((response) => response.json())
            .then((result) => {
                setTodoListState((prevState) => {
                    return [...prevState, ...result];
                });
            });
    }, []);

    useEffect(() => {
        console.log('----> State changed');
        // setTodoListState((prevState) => {
        //     return [...prevState,{ id: 87878, title: '7777'}];
        // }); NE NADO TAK ((
    }, [todoListState]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TodoForm submitHandler={handleSubmit} />
            </Grid>
            <Grid item xs={4}>
                <TodoList list={todoListState} />
            </Grid>
        </Grid>
    );
};
// [
//     {
//         id: 12313,
//         title: 'bla bla'
//     }
// ]
