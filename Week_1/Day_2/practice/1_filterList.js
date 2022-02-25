// Напишите функцию которая принимет на вход массив 
// и возвращает только числа из этого массива 

const list = [1, 'privet', 2, 3, 'poka'];

function numbers(array){
    const result = [];
    for (const element of array) {
        if(typeof element === 'number'){
            result.push(element)
        }
    }
    return result
};

console.log(numbers(list))

const filterByNumbers = array => array.filter(el => typeof el === 'number');

console.log(filterByNumbers(list))

