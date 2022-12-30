const Person = (function() {
    function Person(name){
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        //constructor: Person,
        sayHello(){
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Yoon');

console.log(me.constructor === Person); // 프로토타입이 교체되어 생성자 함수의 연결이 파괴
console.log(me.constructor === Object); // 프로토타입의 체인을 따라 constructor 검색
