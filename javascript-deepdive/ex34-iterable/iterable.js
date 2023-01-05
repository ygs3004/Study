const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

console.log(isIterable([])); // true
console.log(isIterable('')); // true
console.log(isIterable(new Map()));//true
console.log(isIterable(new Set())); // true
console.log(isIterable({})); // false

const array = [1, 2, 3];

console.log(Symbol.iterator in array); // true

// iterable 배열은 for of로 순회 가능
for (const item of array) {
    console.log(item); // 1 2 3
}

// 스프레드 문법으로 사용 가능
console.log([...array]) // [1, 2, 3]

// 디스트럭처링 할당 가능
const [a, ...rest] = array;
console.log(a, rest); // 1 [2, 3]

// 일반 객체는 디스트럭처링 할당, 순회 불가능
const obj = {
    a: 1,
    b: 2,
}

console.log(Symbol.iterator in obj); // false
// for (const item of obj){ console.log(item);} TypeError: obj is not iterable
// const [d, e] = obj; TypeError: obj is not iterable


