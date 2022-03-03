const arr = [1, 2, 3];
const arr2 = [1, 4,5]

Array.prototype.sum = function(){
    console.log(this)
    console.log('Hello');
}

arr.sum()
arr2.sum()