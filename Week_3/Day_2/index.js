document.querySelector('button').addEventListener('click', (event) => {
    alert('ALIVE')
})

// for (let index = 0; index < 100000; index++) {
//     console.log(index);
// }

// const myPromise = new Promise((resolve, reject) => {
//     resolve('HELLO')
//     // reject('OI OI')
// });

// const exampleSTR = `THIS IS PROMISE ${myPromise}`
// myPromise
// .then((succesValue) => console.log(`THIS IS PROMISE ${succesValue}`))
// .catch((rejectedValue) => console.log(`THIS IS PROMISE ${rejectedValue}`))
// .finally(() => {
//     console.log('FINAAAAL');
// })
const myPromiseFunc = (number) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number >= 15) {
                resolve('YOU GROWN UP ENouGH');
            } else {
                reject('TOO Young');
            }
        }, 15000);
    });

myPromiseFunc(6)
    .then((succesValue) => console.log(`THIS IS PROMISE ${succesValue}`))
    .catch((rejectedValue) => console.log(`THIS IS PROMISE ${rejectedValue}`))
    .finally(() => {
        console.log('FINAAAAL');
    });
