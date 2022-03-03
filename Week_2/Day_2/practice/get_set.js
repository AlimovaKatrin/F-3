// Данн класс Персон
// у него есть свойства 2 шт ( имя и фамилия)
// один метод который выводит полное имя
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  let marcusFenix = new Person('Marcus', 'Fenix');
  console.log(marcusFenix.firstName); // => 'Marcus'
  console.log(marcusFenix.lastName); // => 'Fenix'
  console.log(marcusFenix.getName()); // => 'Marcus Fenix'

// Добавьте геттер name, который возвращает полное имя
// Добавьте сеттер имени, который изменяет имя и фамилию
// После добавления нового геттера и сеттера Person можно использовать следующим образом:

// ВАЖНО !! Менять класс нельзя - ваша задача обратиться к уже существующему классу и добавить ему геттер и сеттер

let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'