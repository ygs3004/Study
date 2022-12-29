const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName',{
    value: 'GunSoo',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(person, 'lastName',{
    value: 'Yoon'
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// [[Enumerable]] 의 값이 false인 경우
// 해당 프로퍼티는 for... in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); // ['firstName']

// [[Writable]] 의 값이 false 인경우 [[Value]]의 값 변경 불가
// lastName 은 [[Writable]]의 값이 false이므로 값 변경 불가
// 이때 값을 변경해도 에러는 발생하지 않고 무시된다.
person.lastName = 'Kim';

// [[Configurable]]의 값이 false 인 경우 삭제, 재정의 불가
// 이때 값을 삭제해도 에러는 발생하지 않고 무시된다.
// 재정의 시에는 에러 발생
delete person.lastName;
// Object.defineProperty(person, 'lastName', {enumerable: true}); // TypeError: Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName',{
    // getter
    get(){
        return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
})

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

person.fullName = 'SooGun Yozoon';
console.log(person);

descriptor = Object.getOwnPropertyDescriptors(person);
console.log(descriptor);