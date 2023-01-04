class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi(){
        return `Hi ${this.name}`;
    }
}

class Derived extends Base{
    sayHi = () => `${super.sayHi()} how are you doing?`; // 상위 스코프의 super를 참조
}

const derived = new Derived('Yoon');
console.log(derived.sayHi()); // Hi Yoon how are you doing? 


(function () {
    // 화살표 함수 foo 의 arguments 는 상위 스코프인 즉시 실행 함수의 arguments 를 가리킨다.
    const foo = () => console.log(arguments);
    foo(3, 4)
})(1, 2); // [Arguments] { '0': 1, '1': 2 }

// 화살표 함수에서 가변 인자 함수를 구현할때는 Rest 파라미터를 이용