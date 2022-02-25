// console.log(typeof [])
const first = ['Hello','SlowPoke'];
if(first.length){
    console.log(first.join(','))
};

console.log([...first])

const second = [...first,'and Team']; // rest / spread

// slice
const third = second.slice(1,2)
// console.log(second)
// splice !!!  меняет исходник
second.splice(0,1,'OLA')
console.log(second)

// concat
// const empty = []
const fourth = [].concat(second);
fourth
// loop : обычный и for of
for (const elementOfArr of fourth) {
    console.log(elementOfArr, fourth.indexOf(elementOfArr));
}
// map
const five = fourth.map((element, i) => {
    
    return `elem -> ${element} index -> ${i}`
})
five


// forEach
const obj = {};
five.forEach((value,i)=> {
    obj[i] = value
});
obj