// Number.isFinite
// 유한한 수인지 검사 => Infinity 일 경우 false
// NaN 일 경우 false

// true
console.log(Number.isFinite(0));
console.log(Number.isFinite(Number.MAX_VALUE));
console.log(Number.isFinite(Number.MIN_VALUE));

// false
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

// Number.isFinite 는 인수를 암죽적 타입 변환하지 않는다.
// isFinite 는 인수를 암묵적 타입 변환한다. (null -> 0)
console.log(Number.isFinite(null)); // false
console.log(isFinite(null)); // true


// Number.isInteger
// 정수인지 검사, 암묵적 타입변환을 하지 않는다.

// true
console.log(Number.isInteger(0));
console.log(Number.isInteger(123));
console.log(Number.isInteger(-1));

// false
console.log(Number.isInteger(0.5));
// 암묵적 타입변환을 하지 않는다.
console.log(Number.isInteger('123'));
console.log(Number.isInteger(false));
// Infinity는 정수가 아니다
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));


// Number.isNaN
// 암묵적 타입변환을 하지 않는다.

// true
console.log(Number.isNaN(NaN));

//false
console.log(Number.isNaN(undefined));

// isNaN은 Number.isNaN과 다르게 암묵적 타입변환을 함
console.log(isNaN(undefined)); // true

