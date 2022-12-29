// 프로퍼티 구조가 동일한 여러개의 객체를 간편하게 생성 가능
function Circle(radius){
    // this => 생성할 인스턴스를 가리킴
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
    
    // 생성자 함수 사용시 암묵적으로 this를 반환 다른객체를 명시적으로 return 하면 그것으로 반환
}

// 인스턴스 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle
const circle2 = new Circle(10); // 반지름이 10인 Circle

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20