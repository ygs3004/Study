// 생성자 함수 호출시 new 연산자 없이 함수를 호출하는 것을 방지
// new.target new 연산자와 같이 호출되었는지 확인 가능
function Circle(radius){
    if(!new.target){
        //new 연산자와 함께 생성자 함수를 재귀 호출하여 인스턴스 반환
        return new Circle(radius);
    }
    // ES5
    if(!(this instanceof Circle)){
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

// new 연산자 없이 호출 가능
const circle = Circle(5);
console.log(circle.getDiameter());
