function Circle(radius){
    this.radius = radius;
}

// 공유해서 사용할 수 있도록 프로토 타입에 추가
// Circle 생성자 함수가 생성한 모든 인스터가 getArea 메서드를 공유
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩
Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true 하나의 getArea 메서드 공유

console.log(circle1.getArea());
console.log(circle2.getArea());