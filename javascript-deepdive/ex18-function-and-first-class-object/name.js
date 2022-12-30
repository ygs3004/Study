// 기명함수
var namedFunc = function foo(){}

// 익명함수
var anonymousFunc = function () {};
// ES6: name 프로퍼티는 함수 객체를 가리키는 식별자 이름을 값으로 갖는다 (ES5: name 프로퍼티는 빈문자열)

// 함수 선언문(Function declaration)
function bar(){}

console.log(namedFunc.name);        // foo 함수의 이름
console.log(anonymousFunc.name);    // anonymousFunc 식별자의 이름(ES6)
console.log(bar.name);              // bar
