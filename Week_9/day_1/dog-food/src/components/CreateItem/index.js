import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../utils/api';

export const CreateItem = () => {
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
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='inputName' placeholder='name' />
            <input name='inputDescription' placeholder='description' />
            <input name='inputPrice' placeholder='price' />
            <button>Добавить товар</button>
        </form>
    );
};
