class Person{
    // private 필드 정의
    #name = ''; // 클래스 몸체에서 정의

    constructor(name) {
        // private 필드 참조
        this.#name = name;
    }

    // name 접근자 프로퍼티
    get name(){
        //private 필드 참조
        return this.#name.trim();
    }

}

const me = new Person('Yoon');
// private 필드는 외부에서 참조할 수 없다. 클래스 내부에서만 참조 가능
// console.log(me.#name); Private field '#name' must be declared in an enclosing class

// 접근자 프로퍼티 getter를 이용하여 접근
console.log(me.name); // Yoon

class MyMath{
    static PI = 22/7;

    // static private
    static #num = 10;

    // static
    static increment(){
        return ++MyMath.#num;
    }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()) // 11
