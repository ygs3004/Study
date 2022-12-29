function add(x, y){
    return x+y;
}

let inst = new add();

console.log(inst); // add {}, 함수가 객체를 반환하지 않았으므로 반환문 무시, 빈객체가 생성되어 반환

// 객체를 반환하는 일반함수
function createUser(name, role){
    return {name, role};
}

inst = new createUser('Yoon', 'admin');
// return 된 객체를 반환 new 연산자 => [[Construct]] 호출
console.log(inst);

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

// new 연산자 없이 호출시 일반함수로서 호출
const circle = Circle(5);
console.log(circle); // undefined

// 일반 함수가 [[Call]] 되어 this가 전역 값을 바꿈
console.log(radius);
console.log(getDiameter()); // 10

// circle.getDiameter(); TypeError: Cannot read property 'getDiameter' of undefined