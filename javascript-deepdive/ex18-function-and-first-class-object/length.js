// 함수 객체의 length 프로퍼티는 함수를 정의할때 선언한 매개변수의 개수를 가리킨다

function foo(){}
function bar(x){}
function barz(x,y){}
console.log(foo.length);
console.log(bar.length);
console.log(barz.length);