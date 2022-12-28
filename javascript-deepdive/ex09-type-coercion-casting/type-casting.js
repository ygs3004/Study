let x = 10;

// 명시적 타입 변환(explicit coercion)
let str = x.toString();
console.log(typeof str, str); // string 10
// x 변수의 값은 그대로
console.log(typeof x, x); // number 10

// 암묵적 타입변환(implicit coercion), 강제 타입변환(type coercion)
let a = 10;
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열 생성
let str_ = x + '';
console.log(typeof str_, str_); // string 10
console.log(typeof a, a); // number 10