// 표현식이 아닌 문은 값처럼 사용할 수 없다
//var foo = var x; // SyntaxError: Unexpected token var

// 변수 선언문은 표현식이 아닌 문
var x;

// 할당문은 그자체가 표현식이지만 완전한 문이기도 하다. 즉, 할당문은 표현식인 문이다.
x = 100;

// 표현식인 문("x=100")은 값처럼 사용할 수 있다
var foo = x = 100;
console.log(foo)