// eval 문자열 코드를 평가 / 실행한 값
console.log(eval('1+2;')); // 3
console.log(eval('var x = 5;')); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x변수가 선언되었다
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({a:1})');
console.log(o); // {a:1}

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function(){return 1;})');
console.log(f);

// eval 함수는 보안에 취약, 최적화 x, 사용하지 말 것

// isFinite(), 전달받은 인자를 숫자로 타입변환 후 유한수인지 체크, 무한수, NaN일 경우 alse
console.log(isFinite(0)); // true
console.log(isFinite(2e64)); // true
console.log(isFinite('10')); // true
console.log(isFinite(null)); // null -> 0 true

// 인수가 무한수
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false

// 인수가 NaN으로 평가되는 값이라면
console.log(isFinite(NaN)); // false
console.log(isFinite('Hello')); // false
console.log(isFinite('2005/12/12')); // false
