// console.log(a)
// var a = 10;
// sayHello();

// function sayHello(){
//     // let a = 10
//     console.log(a)
// };

// first();
// var a = 1;

// function first(){ 
//     let b = 2;
//     function second(){
//         console.log(a)
//         console.log(b)
//     }
//     second();
// }


// CLOSURE
// function first(){ // functionScope first
//     let b = 2;
//     function second(){
//         console.log(b)
//     }
//     second();
// }

// let c = 1; 

// function third(){
//     console.log(c)
// };

// third();

function counter(){
    let count = 0;

     return function increment(){
        count+=1
        return count
    }
}
// const a =counter()
const personCounter1 = counter(); // всучили счетчик - дали в руки счетчик (кликер )
const personCounter2 = counter();
personCounter1()
console.log(personCounter1())
console.log(personCounter1())
console.log(personCounter1())
console.log(personCounter1())
console.log(personCounter1())
console.log(personCounter1())
console.log(personCounter1())
console.log(personCounter1())

console.log(personCounter2())
console.log(personCounter2())
console.log(personCounter2())
console.log(personCounter2())
console.log(personCounter2())

console.log(personCounter1())

// function hello(){
//     console.log('dkdkdkd');
// }

// const hello1 = hello
// hello1()