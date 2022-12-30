// __proto__ 접근자 프로퍼티

const obj = {};
const parent = {x:1};

// getter
console.log(obj.__proto__);
// setter 가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1
console.log(obj); //{}

const person = {name:'Yoon'};

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다, Object.prototype의 프로퍼티다
console.log(person.hasOwnProperty('__proto__')); //false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// 모든 객체는 Object.prototype 의 접근자 프로퍼티 __proto__ 를 상속받아사용
console.log({}.__proto__ === Object.prototype);

// 접근자 프로퍼티를 통해 접근하는 이유
// 상호 참조에 의한 프로토타입 체인 생성 방지
const child = {};

child.__proto__ = parent;
// parent.__proto__ = child; TypeError: Cyclic __proto__ value

// __proto__ 접근자 프로퍼티를 코드내에서 직접 사용하는것은 좋지 않음
const object = Object.create(null);
// object는 Object.__proto__를 상속 받을 수 없다
console.log(object.__proto__); // undefined
// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다
// 교체하고 싶을때는 Object.setPrototypeOf
console.log(Object.getPrototypeOf(object)); // null

const father = {x:1};

Object.getPrototypeOf(object); // object.__proto__;
Object.setPrototypeOf(object, father) // object.__proto == fater;
console.log(object.x); // 1