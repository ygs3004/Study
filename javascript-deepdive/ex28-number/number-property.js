// Number.EPSILON
// 1과 1보다 큰 숫자중 가장 작은 숫자차이
// 2진법 사용시 부동소수점으로 이한 오차 해결
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
console.log(Number.EPSILON); // 2.220446049250313e-16
function isEqual(a, b){
    // 두숫자의 차이가 EPSILON 보다 작으면 같은 숫자로 인정
    return Math.abs(a-b) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3)); // true

// Number.MAX_VALUE
// 자바스크립트에서 표현할 수 있는 가장 큰 양수값
// Infinity 보다 작다
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Infinity > Number.MAX_VALUE); // true

// Number.MIN_VALUE
// 자바스크립트에서 표현할 수 있는 가장 작은 양수 값
// 0 보다 크다
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE > 0); // true

// NUMBER.MAX_SAFE_INTEGER
// 자바스크립트에서 표현할 수 있는 가장 큰 정수 값
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// NUMBER.MIN_SAFE_INTEGER
// 자바스크립트에서 표현할 수 있는 가장 큰 작은 값
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Number.POSITIVE_INFINITY
// Number.NEGATIVE_INFINITY
// 무한대를 나타냄
console.log(Number.POSITIVE_INFINITY); // 양의 무한대
console.log(Number.NEGATIVE_INFINITY); // 음의 무한대

// Number.NaN
// 숫자가 아님을 나타내는 숫자
console.log(Number.NaN); // NaN
