import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../utils/api';

export const CreateItem = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const {
            target: { name, description, price },
        } = event;
        // name.value === event.target.name.value
        api.addProduct({
            name: name.value, // name(ключ объекта) : name.value(обращение к value input из узла дома event target)
            description: description.value,
            price: price.value,
        })
            .then((data) => {
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' placeholder='name' />
            <input name='description' placeholder='description' />
            <input name='price' placeholder='price' />
            <button>Добавить товар</button>
        </form>
    );
};
