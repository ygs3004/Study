function Person(name, age){
    this.name = name; // public
    let _age = age; // private

    // 인스턴스 메서드
    this.sayHi = function(){
        console.log(`Hi! My name is ${this.name}. I am ${_age}`)
    };
}

let me = new Person('Yoon', 20);
me.sayHi();

console.log(me.name); // Yoon
console.log(me._age); // undefined

Person = function(name, age){
    this.name = name;
    let _age = age;
}

// 프로토타입 메서드
Person.prototype.sayHi = function(){
    // Person 생성자 함수의 지역변수 _age를 참조할 수 없다.
    console.log(`Hi! My name is ${this.name}. I am ${_age}`); // ReferenceError: _age is not defined
}

Person = (function(){
    let _age = 0; // private

    //생성자 함수
    function Person(name, age){
        this.name = name; // public
        _age = age;
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function(){
        console.log(`Hi! My name is ${this.name}. I am ${_age}`);
    };

    // 생성자 함수를 반환
    return Person;
}());

me = new Person('Yoon', 30);
me.sayHi(); // Hi! My name is Yoon. I am 30
console.log(me.name); // Yoon
console.log(me._age); // undefined

const you = new Person("Kim", 21);
you.sayHi(); // Hi! My name is Kim. I am 21
console.log(you.name); // Kim
console.log(you._age); // undefined

// Person.prototype.sayHi는 단 한번 생성되는 클로저이므로 변수를 공유
me.sayHi(); // Hi! My name is Yoon. I am 21

