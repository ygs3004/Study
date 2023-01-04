class Person{
    constructor(name) {
        this.name = name;

        // 암묵적으로 this 를 반환하지만
        // 명시적으로 객체 반환시 this 반환 무시
        return {};
    }
}

const me = new Person('Yoon');
console.log(me);

class Human{
    constructor(name) {
        this.name = name;

        // 원시값 반환시 반환이 무시되고
        // this를 반환
        return 100;
    }
}

const you = new Human("GunSoo");
console.log(you); // Human { name: 'GunSoo' }