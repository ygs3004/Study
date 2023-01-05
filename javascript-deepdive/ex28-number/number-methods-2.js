// Number.isSafeInteger
// -(2^53-1) 부터 (2^53-1) 사이의 정수값
// 암묵적 타입변환을 하지 않는다.

// true
console.log(Number.isSafeInteger(0));
console.log(Number.isSafeInteger(1000000000000000));
// false
console.log(Number.isSafeInteger(10000000000000001));
console.log(Number.isSafeInteger(0.5));
// 암묵적 타입변환을 하지 않음 -> false
console.log(Number.isSafeInteger('123'));
console.log(Number.isSafeInteger(false));
// Infinity 는 정수가 아님
console.log(Number.isSafeInteger(Infinity));


// Number.prototype.toExponential
// 숫자를 지수표기법으로 변환한후 문자열로 반환, 인수로 소숫점 이하자릿수 표현
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77.1234).toExponential(4)); // 7.7123e+1
console.log((77.1234).toExponential(2)); // 7.71e+1

// Number 프로토타입 메소드는 기본적으로 숫자 리터럴로는 불가능 -> '.' 을 소숫점으로 인식함
// 77.toExponential(); SyntaxError: Invalid or unexpected token

// '.' 이 두개거나, 그룹연산자 (), 공백을 이용하여 접근가능
77.1234.toExponential();
(77).toExponential();
77 . toExponential();


// Number.prototype.toFixed
// 숫자를 반올림하여 문자열로 반환
// 인수로 자릿수를 나타낼수 있음, 기본값 0
console.log((12345.6789).toFixed()); // 12346
console.log((12345.6789).toFixed(1)); // 12345.7
console.log((12345.6789).toFixed(2)); // 12345.68
console.log((12345.6789).toFixed(3)); // 12345.679

