// 함수객체는 prototype 프로퍼티를 소유
console.log((function(){}).hasOwnProperty('prototype')); // true
// 일반객체는 prototype 프로퍼티를 소유하지 않는다
console.log({}.hasOwnProperty('prototype')); // false

// non-constructor (화살표 함수, 메서드 축약표현), prototype 프로퍼티를 소유하지도 않고, 프로토타입도 생성하지도 않는다.
// 화살표함수 (non-constructor)
const Person = name => {
    this.name = name;
};
console.log(Person.hasOwnProperty('prototype')); // false
// 메서드 축약표현
const obj = {
    foo() {
    }
};
console.log(obj.foo.hasOwnProperty('prototype')); // false

// 생성자 함수
function Constructor(name){
    this.name = name;
}

const construct = new Constructor('Yoon');
// 생성자 함수의 prototype과 생성자 함수로 생성된 객체의 __proto__ 는 동일한 프로토 타입을 가리킨다
console.log(Constructor.prototype === construct.__proto__); // true
// 생성된 객체의 생성자 함수
console.log(construct.constructor === Constructor); //true