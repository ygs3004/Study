// 클래스는 1급 객체다
// 무명의 리터럴로 생성 가능, 런타임 생성 가능
// 변수나 자료구조에 저장(객체, 배열 등) 가능
// 함수의 매개변수로 전달 가능
// 함수의 반환값으로 사용 가능

// 클래스 선언문
class Person{};

// 익명 클래스 표현식
const Anonymous= class {};

// 기면 클래스 표현식
const My = class MyClass{};

// 클래스 몸체에 정의 가능한 메서드 : 생성자, 프로토타입 메서드, 정적 메서드
class Human{
    // 생성자
    constructor(name) { 
        // 인스턴스 생성 및 초기화
        this.name = name; // public
    }

    // 프로토타입 메서드
    // Person.prototype.sayHi = function(){...}
    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }

    // 정적 메서드
    // Person.sayHello = function(){...}
    static sayHello(){
        console.log('Hello!');
    }

}

// 인스턴스 생성
const me = new Human('Yoon');

// 인스턴스 프로퍼티 참조
console.log(me.name); // Yoon

// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Yoon

// 정적 메서드 호출
Human.sayHello(); // Hello!
