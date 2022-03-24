import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Container } from './components/Container';
import { TodoContainer } from './components/TodoContainer';

function App() {
    // let name = 'Slowpoke';
    // const [dynamicValue, setDynamicValue] = useState('Some cool group');

    return (
        <div className='App'>
            {/* <Container /> */}
            <TodoContainer />
            {/* <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                {name} Learn React <br/>
                {dynamicValue} Learn React
                <button
                    onClick={() => {
                        name = 'Pikachu';
                        console.log(name);
                    }}>
                    Просто переменная
                </button>
                <button
                    onClick={() => {
                        setDynamicValue('THE best group')
                    }}>
                    Смена состояния
                </button>
            </header> */}
        </div>
    );
}

export default App;
