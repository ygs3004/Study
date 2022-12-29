// 접근자 프로퍼티 : [[Get]], [[Set]], [[Enumerable]], [[Configurable]]

const person = {
    // 데이터 프로퍼티
    firstName: 'Name',
    lastName: 'Kim',

    // 접근자 프로퍼티
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' '); // 배열 디스트럭처링 할당
    }
}

// 데이터 프로퍼티를 통한 참조
console.log(person.firstName+' '+person.lastName); // Name Kim

// 접근자 프로퍼티를 통한 저장
// 접근자 프로퍼티를 통해 저장하면 setter 함수가 호출됨
person.fullName = 'GunSoo Yoon';
console.log(person);

// 접근자 프로퍼티를 통한 참조
// getter 호출
console.log(person.fullName);

// firstName은 데이터 프로퍼티
//  프로퍼티 어트리뷰트를 갖는다 - [[Value], [Writable]], [[Enumerable]], [[Configurable]]
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티다
//  프로퍼티 어트리뷰트를 갖는다 - [[Get], [[Set]], [[Enumerable]], [[Configurable]]
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);

// 일반 객체의 __proto__ 는 접근자 프로퍼티다.
let o = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
console.log(o);
// {get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티다.
o = Object.getOwnPropertyDescriptor(function(){}, 'prototype');
console.log(o);
// { value: {}, writable: true, enumerable: false, configurable: false }