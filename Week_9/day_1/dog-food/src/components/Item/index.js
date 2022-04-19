import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';

export const Item = () => {
    const [item, setItem] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        api.deleteProduct(params.itemID)
            .then((data) => {
                console.log(data);
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    useEffect(() => {
        api.getProducts(params.itemID)
            .then((data) => setItem(data))
            .catch((err) => alert(err));
    }, []);
    return (
        <>
            <button onClick={handleClick}>Удалить товар</button>
            <pre>{JSON.stringify(item, null, 4)}</pre>
        </>
    );
};
