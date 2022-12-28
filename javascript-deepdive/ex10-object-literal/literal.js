// 객체 리터럴 : {}
// 프로퍼티(값)와 메소드(동작, 함수)로 구성
let person = {
    name: 'Yoon',
    sayHello: () => console.log(`Hello! My name is ${this.name}`)
}

console.log(typeof person); //object
console.log(person); // { name: 'Yoon', sayHello: [Function: sayHello] }

let empty = {};
console.log(typeof empty); // object