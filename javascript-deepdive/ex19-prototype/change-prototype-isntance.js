function Person(name){
    this.name = name;
}

const me = new Person('Yoon');

// 프로토타입으로 교체할 객체
const parent = {
    constructor: Person,
    sayHello(){
        console.log(`안녕 난 ${this.name}이라고 해`)
    }
}

// 프로토타입 교체
// me.__proto__ = parent
Object.setPrototypeOf(me, parent);

me.sayHello();

console.log(me.constructor === Person); // false 프로토타입이 교체되어 생성자 함수의 연결이 파괴
console.log(me.constructor === Object); // true 프로토타입의 체인을 따라 constructor 검색

// 생성자 함수와 객체의 prototype 재연결
Person.prototype = parent;
console.log(Person.prototype === Object.getPrototypeOf(me));