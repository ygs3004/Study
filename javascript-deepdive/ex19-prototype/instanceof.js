// 객체 instanceof 함수
// 객체를 생성자 함수와 비교하는게 아니라 prototype을 비교.2

// 생성자 함수
function Person(name){
    this.name = name;
}

const me = new Person('Yoon');

// Person.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true
console.log(me instanceof Person);
// Object.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true
console.log(me instanceof Object);

// 프로토타입 교체
const parent = {};
Object.setPrototypeOf(me, parent);
// Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent); // false
console.log(parent.constructor === Person); // false
console.log(me instanceof Person); // false
console.log(me instanceof Object); // true

// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩 가능
Person.prototype = parent;
console.log(me instanceof Person); // true

function isInstanceof(instance, constructor){
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);
    
    // 재귀 탈출 조건
    // prototype이 null 이면 종점에 도달한것
    if(prototype === null) return false;

    // 생성자 함수의 prototype 프로퍼티에 바인딩 되어있는지 확인
    // 그렇지 않다면 사위 프로토타입 확인
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person)); // true
console.log(isInstanceof(me, Object)); // true
console.log(isInstanceof(me, Array)); // false

const Animal = (function(){
    function Animal(name){
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체(생성자 함수 제거)
    Animal.prototype = {
        sayHello(){
            console.log('Hello');
        }
    }

    return Animal
}());

const animal = new Animal('사자');

console.log(animal.constructor === Animal); // false, 생성자 함수 연결 파괴ㅏ

console.log(animal instanceof Animal); // true, 객체 instanceof 생성자함수 => 프로토타입으로 비교
console.log(animal instanceof Object); // true
