// 논리합(||) 연산자
console.log('cat' || 'dog'); // cat
console.log(false || 'dog'); // dog
console.log('cat' || false); // cat

// 논리곱(&&) 연산자
console.log('cat' && 'dog'); // dog
console.log(false && 'dog'); // false
console.log('cat' && false); // false

// 논리곱(&&) 연산자 if 문 대체
let done = true;
let message = '';
// 주어진 조건이 true
if(done) message = '완료';
console.log(message); // 완료
// if 문을 단축평가로 대체
message = done && '완료';
console.log(message); // 완료

// 논리합(||) 연산자 if 문 대체
let done2 = false;
let message2 = '';
// 주어진 조건이 true
if(!done2) message2 = '미완료';
console.log(message2); // 미완료
// if 문을 단축평가로 대체
message2 = done2 || '미완료';
console.log(message2); // 미완료

let elem = null;
// let value = elem.value; // TypeError: Cannot read property 'value' of null
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가
// elem이 Truthy 값이면 elem.value로 평가
let value = elem && elem.value; // null
console.log(value);