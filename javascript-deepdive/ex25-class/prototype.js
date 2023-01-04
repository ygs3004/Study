class Person{

    constructor(name){
        this.name = name;
    }
    
    // 프로토타입 메서드
    // Person.prototype.sayHi = function(){}
    sayHi(){
        console.log(`Hi My name is ${this.name}`);
    }

}

const me = new Person("Yoon");
me.sayHi();

console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(me instanceof Person);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(me instanceof Object);
console.log(me.constructor ===  Person);
