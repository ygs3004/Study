// 동등 비교(==) 일치 비교(===)

// 동등 비교 : 암묵적 타입 변환 후에 같은 값일수 있다면 true
console.log(5 == 5); // true
console.log(5 == '5'); // true
// 동등 비교는 결과를 예측하기 어렵다
console.log('0' == ''); //false
console.log(0 == ''); //true
console.log(0 == '0'); //true
console.log(false == 'false'); //false
console.log(false == '0'); // true
console.log(false == null); // false
console.log(false == undefined); // false

// 일치 비교 연산자: 타입과 값이 같아야 true, NaN은 자신과 일치하지 않는 유일한 값
console.log(NaN === NaN); // false

// Number.isNan 활용
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN(1+undefined)); // true

// +0과 -0은 일치 및 동등 비교 모두 true
console.log(0===-0);
console.log(0==-0);

// Object.is 메서드 이용하여 비교시 NaN 과 NaN을 true 로, 0과 -0을 false 로 리턴

console.log(-0 === +0); // true
console.log(Object.is(-0, 0)) // false
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true
