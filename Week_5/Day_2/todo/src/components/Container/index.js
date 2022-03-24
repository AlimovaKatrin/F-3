import { useState } from 'react';
import './styles.css';
import { Input } from '../Input/Input';
import { Text } from '../Text';

export const Container = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className='container'>
            <Text textToRender={inputValue} />
            <Input changeInputValue={setInputValue} />
        </div>
    );
};
