// Object.create(생성할 객체의 프로토타입, 생성할 객체의 프로퍼티를 갖는 객체)
// 프로토타입이 null인 객체 생성. 생성된 객체는 프로토타입 체인의 종점에 위치
// obj => null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)===null); // true

// Object.prototype 을 상속받지 못한다.
// console.log(obj.toString()); TypeError: obj.toString is not a function

// obj => Object.prototype => null
// obj = {}; 와 동일
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj => Object.prototype => null
// obj = { x:1 }; 와 동일하다
obj = Object.create(Object.prototype,{
    x:{
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    }
})
// 아래코드와 동일
// obj = Object.create(Object.prototype);
// obj.x = 1;

console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = {x:10};
// 임의의 객체 상속
// obj => myProto => Object.prototype => null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name){
    this.name = name;
}
// obj => Person.prototype => Object.prototype => null
// obj = new Person('Yoon')와 동일하다
obj = Object.create(Person.prototype);
obj.name = 'Yoon';
console.log(obj.name); // Yoon
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true