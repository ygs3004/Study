// 생성자 함수
function Person(name){
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function(){
    console.log(`Hi! My name is ${this.name}`)
};

// 정적 프로퍼티
Person.staticProp = 'static prop';

// 정적 메서드
Person.staticMethod = function(){
    console.log('staticMethod');
};

const me = new Person('Yoon');

// 생성자 함수에 추가한 정적 프로퍼티 / 메서드는 생성자 함수로 참조 / 호출한다.
Person.staticMethod(); // staticMethod
// 정적 프로퍼티 메서드는 생성자 함수가 생성한 인스턴스로 참조 / 호출할 수 없다.
// 인스터스로 참조 / 호출할 수 있는 프로퍼티 / 메서드는 프로토타입 체인상에 존재해야 한다
// me.staticMethod(); TypeError: me.staticMethod is not a function


// Object.create는 정적 메서드
const obj = Object.create({name: 'Yoon'});

// Object.prototype.hasOwnProperty 는 프로토타입 메서드
obj.hasOwnProperty('name'); // false

function Foo (){}

// 프로토타입 메서드
// this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과
Foo.prototype.x = function (){
    console.log('x');
};

const foo = new Foo();
foo.x(); // x

// 정적 메서드
Foo.x = function(){
    console.log('x');
}

// 인스턴스를 생성하지 않아도 호출
Foo.x(); // x