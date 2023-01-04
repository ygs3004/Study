// constructor 생략시 아래와 같이 암묵적 정의

// 수퍼클래스
class Base {
    constructor() {}
}

// 서브클래스
class Derived extends Base{
    constructor (...args) { super(...args);}
    // 서브클래스에서 constructor를 생략하지 않는경우 반드시 super 호출해야함
}