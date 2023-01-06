// 스프레드 프로퍼티
// 얕은 복사
let obj = { x:1, y: 2 };
let copy = { ... obj }
console.log(copy);
console.log(obj === copy); // false

// 객체 병함
let merged = { x: 1, y: 2, ...{ a: 3, b: 4 }};
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }

// 스프레드 이전 객체병함
merged = Object.assign({}, {x: 1, y: 2}, {y: 10, z: 3});
console.log(merged); // { x: 1, y: 10, z: 3 }

// 프로퍼티 변경
let changed = Object.assign({}, {x: 1, y: 2}, {y: 100});
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
let added = Object.assign({}, {x: 1, y: 2}, {z: 0});
console.log(added); // { x: 1, y: 2, z: 0 }


// 스프레드 객체 병합
merged = {...{x: 1, y: 2}, ...{y: 10, z: 3}};
console.log(merged); // { x: 1, y: 10, z: 3 }

// 변경
changed = {...{x: 1, y: 2}, y: 100};
console.log(changed); // { x: 1, y: 100 }

// 추가
added = {...{x: 1, y: 2}, z: 0};
console.log(added); // { x: 1, y: 2, z: 0 }
