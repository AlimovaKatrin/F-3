const first = {
    name: 'Slowpoke'
}

first.age = 24;

const somevarial = 'addres'

first[somevarial] = 'Moscow';

first
for (const key in first) {
   console.log(first[key])
}

console.log(Object.keys(first));
console.log(Object.values(first));

// function declaration 
function hello(){
    console.log('Hello',this.name)
}
//  function expression
const helloArrow = () => {
    console.log('Hello',this.name)
}

const obj = {
    name: 'Slowpoke',
    sayHello: hello,
    sayHello2(){
        
    }
};

obj.sayHello()
obj.sayHello2()


