// Symbol 함수를 호출하여 유일무이한 심벌 값을 생성
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

// 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); // Symbol()

// new 연산자 없이 생성하며, new 연산자와 함께 생성 안됨
// new Symbol(); TypeError: Symbol is not a constructor

// 인수로 문자열을 줄 수 있지만 설명, 디버깅 용도로만 사용되며 심벌 값에 영향을 주지 않음
// 설명이 같더라도 다른 값
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1===mySymbol2);  // false

// 객체처럼 접근식 암묵적 래퍼 객체 생성
console.log(mySymbol1.description); // mySymbol
console.log(mySymbol1.toString()); // Symbol(mySymbol)

// 문자열, 숫자로 암묵적 변환이 되지 않는다.
// console.log(mySymbol + ''); // TypeError: Cannot convert a Symbol value to a string
//console.log(+mySymbol); // TypeError: Cannot convert a Symbol value to a number

// 불리언 타입으로는 변환된다.
// if문 등에서 존재 확인 가능
console.log(!!mySymbol); // true
if (mySymbol) {
    console.log('mySymbol is not empty');
}