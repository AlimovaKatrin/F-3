foo();
var a = 1

function foo(){
    const foo2 = () => {
        console.log(this)
    }
    // let a = 2
    console.log(this)
    foo2()

}

// console.log(a)
const obj = {
     a: '1',
     foo(){
         console.log(this)
     }
}

obj.foo();

const arr = new Array();
arr.push(1)
arr

