//  Дан массив чисел 
//  верните сумму положительных чисел 


const positiveSum = (array) => {
    let acc = 0;
    array.forEach(element => {
        if(element > 0){
            acc += element
        }
    });
    return acc
};

// console.log(positiveSum(listOfNums))

const listOfNums = [1, 2, 1, 2, 5]; 
// const positiveSumReduce = (array) => {
//     return array.reduce((acc,currentValue) => {
//         acc += currentValue
//         console.log({acc,currentValue })
//         return acc
//     },0)
// }
// {
//     1: 2,
//     2: 2,
//     5: 1
// }
const positiveSumReduce = (array) => {
    return array.reduce((acc,currentValue) => {
        if (acc[currentValue]) {
            acc[currentValue] += 1
        } else {
            acc[currentValue] = 1
        }
        return acc
    },{})
}
console.log(positiveSumReduce(listOfNums))

// func(list);
// const obj = {
// }

// obj.a = '456'
// const name = 'fio'
// obj[name] = 'Katrin'

// obj

// В задаче было: let obj = {
//     "Яблоко": "фрукт",
//     "Арбуз": "ягода",
//     "Помидор": "овощ",
//     "Огурец": "овощ",
//     "Вишня": "ягода"
// }
// const func = (obj) => {
//     let resul = {}
//     for (key in obj){
//         if (result[obj[key]] === undefined) {
//             result[obj[key]] = 1;
//         } else{
//             result[obj[key]] +=1;
//         }
//     }
// }