// 익명 즉시 실행 함수
(function(){
    let a = 3;
    let b = 5;
    return a*b;
}());

// 기명 즉시 실행 함수
(function foo(){
    let a = 3;
    let b = 5;
    return a*b;
}());

// foo() // ReferenceError: foo is not defined 함수 : 몸체에서만 참조 가능한 식별자

// 즉시 실행함수는 그룹 연산자(...) 로 감싸야 한다, 선언문 형식에 맞지 않음
/*
function(){

}();
SyntaxError: Function statements require a function name
*/

/* ASI에 의해 ";" 이 암묵적으로 추가 되므로 기명 즉시 실행 함수도 그룹연산자가 필요
function foo(){}();
=> function foo(){};(); 로 해석
SyntaxError: Unexpected token ')'
*/

console.log(typeof (function f(){})); // function
console.log(typeof (function (){})); // function

// 그룹 연산자가 필요한 이유는 함수를 리터럴로 평가해서 객체를 생성하기 위함
// 따라서 아래 방법들도 가능
(function(){}());
(function(){})();
!function(){}();
+function(){}();

// 즉시 실행 함수도 일반 함수처럼 값 반환 및 인수 전달 가능
let res = (function(){
    let a = 3;
    let b = 5;
    return a*b;
}());
console.log(res); // 15

res = (function(a, b){
    return a*b;
}(3, 5));
console.log(res); // 15
