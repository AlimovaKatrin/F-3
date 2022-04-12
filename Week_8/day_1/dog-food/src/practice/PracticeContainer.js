import React, { useState, useEffect } from 'react';
import { Counter } from './Counter';
import { Styles } from './Styles';

export const PracticeContainer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     console.log('RENDER / RERENDER');
    // });

    // useEffect(() => {
    //     console.log('MOUNT');
    //     return () => {
    //         console.log('UNMOUNT');
    //     };
    // }, []);

    // useEffect(() => {
    //     console.log('UPDATE');
    //     // отработает на маунт
    //     // далее следит за стэйтом
    // }, [isVisible]);

    // useEffect(() => {},[]);
    return (
        <div>
            <h6>PracticeContainer</h6>
            {isVisible && <Counter />}
            <div>I AM STATE 👉🏼 {JSON.stringify(isVisible)}</div>
            <button
                onClick={() => {
                    // setIsVisible(!isVisible) лучше так не делать
                    setIsVisible((prevState) => !prevState);
                }}>
                Click
            </button>
            <Styles/>
        </div>
    );
};
