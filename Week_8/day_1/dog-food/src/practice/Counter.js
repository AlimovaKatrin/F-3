import React, { useState, useEffect } from 'react';

export const Counter = () => {
    const [counter, setConuter] = useState(0);

    useEffect(() => {
        console.log('UPDATE', counter);
    }, [counter]);

    useEffect(() => {
        const interval = setInterval(() => {
            setConuter((prevState) => (prevState += 1));
        }, 1000);
        return () => {
            console.log('UNMOUNT');
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h6>{counter}</h6>
        </div>
    );
};
