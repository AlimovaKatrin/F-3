function getThis(){
    console.log(this)
};

function getElder(period1, period2){
    console.log(this)
    console.log(this.age + period1 + period2);
};

const person1 = {
    name: 'Slowpoke',
    age: 23
}
const person2 = {
    name: 'Pikachu',
    age: 13
}

// getThis()

//
// ─── CALL APPLY BIND ────────────────────────────────────────────────────────────
//
getElder()
getElder.call({age:1}, 20, 10)
getElder.call(person1, ...[10, 10])
getElder.apply(person2,[30, 10])

const getAgePerson1 = getElder.bind(person1, 1, 10);

getAgePerson1()
getAgePerson1()
getAgePerson1()
getAgePerson1()
getAgePerson1()

