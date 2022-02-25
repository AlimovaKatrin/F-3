
const numberChecker = (value) => typeof value === 'number';
console.log(numberChecker('asbv'))
console.log(numberChecker({}))
console.log(numberChecker(123))

console.log([1,2,'dsf',123].filter(numberChecker));
console.log([1,2,'dsf',123].filter((el) => numberChecker(el)));
console.log([1,2,'dsf',123].filter((el) => !numberChecker(el)));
// [1,23,45].forEach(console.log)
