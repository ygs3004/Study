class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // fullName 은 접근자 함수로 구성된 접근자 프로퍼티

    // getter
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    // setter
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('GunSoo', 'Yoon');

// 데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(`${me.firstName}, ${me.lastName}`);

// setter
me.fullName = 'GS Y';
console.log(me);

// getter
console.log(me.fullName); // GS Y

console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'))

// 접근자 프로퍼티 => 프로토타입의 프로퍼티
console.log(Object.getOwnPropertyNames(me)); // [ 'firstName', 'lastName' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(me))); //[ 'constructor', 'fullName' ]