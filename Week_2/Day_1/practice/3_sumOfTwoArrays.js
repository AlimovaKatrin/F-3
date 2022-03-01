//  Даны два массива с числами 
// Задача: 
// написать функцию, которая принимает два массива ( усложненная версия с неизвестным числом массивов)
// склеивает их
// и считает сумму 

const first = [1, 2, 3];
const second = [10, 1, 5];
const third = [ 11, 56, 66];

const arrayPlusArray = (arr1, arr2) => {
    // console.log(arguments) нет такого свойства 
    const arr3 = [...arr1,...arr2];
    const res = arr3.reduce((acc,cur) => {
        acc += cur
        return acc
    })
    return res
};
// const arrayPlusArrayRefactor = (arr1, arr2) => [...arr1,...arr2].reduce((acc,cur) => acc+cur);
// const arrayPlusArrayRefactor = (...arr) => {
//     console.log(arr.flat().reduce((acc,cur) => acc+cur));
//     // [...arr1,...arr2].reduce((acc,cur) => acc+cur);
// };
const arrayPlusArrayRefactor = (...arr) => arr.flat().reduce((acc,cur) => acc+cur);
// [[],[],[]]
// []
console.log(arrayPlusArray(first,second))
// console.log(arrayPlusArrayRefactor(first,second,third))
const bigarr = [first,second,third]
console.log(arrayPlusArrayRefactor(...bigarr))

function foo(){
    console.log(arguments)
}

foo(first,second,third,'555',5566)
