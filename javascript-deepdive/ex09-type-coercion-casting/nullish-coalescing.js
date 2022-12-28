// 널병합 연산자 ?? 
// null 또는 undefined 일 경우 우항의 피연산자 반환
let foo = null ?? 'default string';
console.log(foo); // 'default string';

// Falsy 값인 0 이나 ''도 기본값으로서 유효할때 예기치 않은 동작이 발생 가능
foo = '' || 'default string';
console.log(foo); // 'default string';

// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined 가 아니면 좌항의 피연산자 반환
foo = '' ?? 'default string';
console.log(foo); // ""