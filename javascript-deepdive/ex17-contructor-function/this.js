function foo(){
    console.log(this)
}

foo(); // 브라우저에서는  window, Node.js 에서는 global

const obj = {
    foo // ES6 축약 표현
}

obj.foo(); // obj

const inst = new foo(); // inst

function Circle(radius){
    // this => 생성할 인스턴스를 가리킴
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 생성자 함수 사용시 암묵적으로 this를 반환
    // 다른객체를 명시적으로 return 하면 그것으로 반환
    // 다른 원시값을 반환시 무시 되어짐
    // return {};
    // 생성자 함수에선 가능하면 return 문 생략
    return 1;
}

const circle = new Circle(1);
console.log(circle); // return {} 일 경우 => {}, return이 없거나 원시값일 경우 => Circle 객체(this) 반환