import React from 'react';
import ReactDOM from 'react-dom/client';

// const el = <h1>HELLO REACT</h1>;
// ReactDOM.render(el, document.querySelector('#root'));

const element = <h1>Hello, world</h1>;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);