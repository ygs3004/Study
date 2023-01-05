// 심벌 값 으로 프로퍼티키 생성시 절대 충돌하지 않는다.
let obj = {
    // 심벌 값을 프로퍼티 키로 생성
    [Symbol.for('mySymbol')]: 1
}

console.log(obj[Symbol.for('mySymbol')]); // 1

// 심벌을 프로퍼티 키로 사용시 은닉 가능

obj = {
    [Symbol.for('mySymbol')]: 1
}

for (const key in obj) {
    console.log(key); // 출력되지 않는다.
}

console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []

// 찾을 시
console.log(Object.getOwnPropertySymbols(obj));
const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey1]) // 1