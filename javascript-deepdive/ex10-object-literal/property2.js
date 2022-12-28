// 프로퍼티 접근
let person = {
    name: 'Yoon'
};
// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name);
// 대괄호 표기법에 의한 프로퍼티 접근, 따옴표로 감싼 문자열로 접근해야함
console.log(person['name']);
// console.log(person[name]); // name 으로 지정된 문자열이 없다, name is not defined
console.log(person.age); //  존재하지 않는 키값으로 접근할 경우 : undefined, ReferenceError가 발생하지 않음에 주의

// 존재하는 프로퍼티에 값을 지정할 경우 갱신
person.name = 'Gun Yoo';
console.log(person);
// 존재하지 않는 프로퍼티에 값을 지정할 경우 동적으로 생성되어 추가
person.age = '20';
console.log(person);

// 프로퍼티 삭제
delete person.age;
console.log(person);
// 존재하지 않는 프로퍼티 삭제시 에러가 발생하지 않음
delete person.address;
console.log(person);

// 프로퍼티 축약, ES6, 변수 이름과 프로퍼티 키가 동일한 이름일때 생략 가능, 키가 자동으로 생성
let x = 1, y = 2;

const obj1 = {x,y};
console.log(obj1);

// 프로퍼티 키 동적 생성
// E5
let prefix = 'prop';
let i =0;
let obj = {};
// 동적생성
obj[prefix+'-'+ ++i] = i;
obj[prefix+'-'+ ++i] = i;
obj[prefix+'-'+ ++i] = i;
console.log(obj);
// ES6 동적생성
objES6 = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
}
console.log(objES6);

// 함수 정의
// ES5
    const objES5Function = {
        name: 'Yoon',
        sayHi: function() {
            console.log('Hi!'+this.name);
        }
    };
    objES5Function.sayHi();
// ES6
    const objES6Function = {
        name: 'Yoon',
        sayHi() {
            console.log('Hi!'+this.name);
        }
    };
    objES6Function.sayHi();