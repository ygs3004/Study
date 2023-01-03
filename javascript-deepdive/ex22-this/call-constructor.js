// 생성자 함수의 this -> (미래에) 생성할 인스턴스가 바인딩
function Circle(radius){
    // this -> 생성자 함수가 생성할 인스턴스
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);
console.log(circle1.getDiameter()); // 10

// new 연산자와 호출하지 않으면 일반 함수 호출
const circle2 = Circle(15);
console.log(circle2) // undefined

// 일반 함수로 호출된 Circle 내부의 this 는 전역 객체를 가리킨다
console.log(radius); // 15