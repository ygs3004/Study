// 숫자타입
// 모두 숫자 타입
let integer = 10;
let double = 10.12;
let negative = -20;

// 2진수, 8진수, 16진수를 참조시 10진수로 해석
let binary = 0b01000001;
let octal = 0o101;
let hex = 0x41;

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true

// 숫자 타입은 모두 실수로 처리된다
console.log(1 === 1.0); // true
console.log(4/2) // 2
console.log(3/2) // 1.5

// 숫자 타입의 세가지 특별한 값
console.log(10/0); // Infinity
console.log(10/-0); // - Infinity
console.log(1*'String'); //Nan

// 자바스크립트는 대소문자를 구별한다
let x = NaN;
console.log(x) // NaN
let y = nan;
console.log(y) // ReferenceError: nan is not defined



