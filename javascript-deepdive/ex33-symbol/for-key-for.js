// Symbol.for
// 심벌을 검색하여 반환
// 검색 실패시 같은 키 값으로 생성해서 반환
// 유일무이한 상수인 심벌값을 단 하나만 생성하여 전역 심벌 레지스트리에서 공유 가능
const mySymbol1 = Symbol('mySymbol');
const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');
console.log(s1 === s2); // true
console.log(s1 === mySymbol1); // false
// Symbol() 함수로 생성된 값은 전역 심벌 레지스트리에서 관리되지 않음
console.log(Symbol.keyFor(s1)); // mySymbol
console.log(Symbol.keyFor(mySymbol1)); // undefined