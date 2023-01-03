// var 로 선언한 전역 변수
var foo = 1;
console.log(global.foo); // undefined

bar = 2; // 암묵적 전역 window.bar
console.log(global.bar); // 2

// 전역 함수
const baz = function baz(){
    return 3;
}

console.log(global.baz); // undefined

