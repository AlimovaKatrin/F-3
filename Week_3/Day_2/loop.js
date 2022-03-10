setTimeout(() => {
    console.log('1');
    // clearInterval(myInterval);
},0);

function multiply(a, b) {
    console.log('2')

    return a * b;
};

function square(num) {
    console.log('3')
    return Math.sqrt(multiply(1,num));
};

square(4);
console.log('4');
// 4,3,2,1
// 3 2 4 1

// const myInterval = setInterval(() => {
//     console.log('INTERVAL');
// },2000)
