const arr = ['apple', 'banana', 'orange'];


// index를 통해 접근
console.log(arr[0]); // apple
console.log(arr[1]); // banana
console.log(arr[2]); // orange

// 객체 타입
console.log(typeof arr); // object

console.log(arr.constructor === Array); // true
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// 배열과 객체의 차이
// 객체는 값의 순서, length 프로퍼티가 없으나 배열은 있음
// 배열의 구조 : 인데스와 요소, 객체의 구조 : 프로퍼티 키와 프로퍼티 값

