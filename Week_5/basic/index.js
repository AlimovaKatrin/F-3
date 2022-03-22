import { table } from 'table';

const arr = ["Katrin", "mentor", "28"]

// Using commonjs?
// const { table } = require('table');

const data = [
    ['0A', '0B', '0C'],
    arr,
    ['2A', '2B', '2C']
];

console.log(table(data));