import { Welcome, WelcomeClass } from './Welcome';

function App() {
    // logic
    const fio = 'Bla bla bla';

    return (
        <div>
            THIS IS REACT
            <Welcome name='Slowpoke' test='test' />
            <WelcomeClass name='Slowpoke for Class' />
        </div>
    );
}

export default App;
