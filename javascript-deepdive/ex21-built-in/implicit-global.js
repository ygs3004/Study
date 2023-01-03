// 암묵적 전역시 변수가 아니라 전역객체 프로퍼티에 저장된다
console.log(x); // undefined
// console.log(y); 변수가 아닌 전역객체의 프로퍼티이므로 호이스팅 발생 x // ReferenceError: y is not defined


var x = 10; // 전역 변수로 저장
function foo() {
    // 선언하지 않은 실벽자에 값을 할당, 암묵전 전역, 프로퍼티로 저장됨
    y = 20; // window.y = 20;
    console.log(x+y);
}
foo(); // 30

console.log(x); // 10
console.log(global.y); // 20

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(x); // 10
console.log(global.y); // undefined



