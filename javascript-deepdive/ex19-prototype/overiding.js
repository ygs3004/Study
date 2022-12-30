const Person = (function() {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
        console.log(`Hi! My name is ${this.name}`)
    }

    return Person;
}());

const me = new Person('Yoon');

// 인스턴스 메서드
me.sayHello = function(){
    console.log(`Hey! My name is ${this.name}`);
};

// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다
me.sayHello(); // Hey! My name is Yoon

// 인스턴스 메서드가 삭제되고
delete me.sayHello;
// 프로토타입 메서드가 호출됨
me.sayHello(); // Hi! My name is Yoon

// 프로토타입 프로퍼티를 변경하려면 하위 객체를 통해 접근하는 것이 아니라 프로토타입에 접근해야 한다.
// 프로토타입 메서드 변경
Person.prototype.sayHello = function(){
    console.log(`Hey! My name is ${this.name}`)
}
// 프로토타입 메서드 호출
me.sayHello(); // Hey! My name is Yoon

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
// me.sayHello(); TypeError: me.sayHello is not a function
