// 스프레드 문법은 이터러블에 한정
// spread syntax : 뭉쳐있는 여러 값들의 집합을 개별적인 값들의 목록으로 만든다
// 스프레드 문법의 결과는 값이 아니다. -> 변수에 할당 불가
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(...'Hello'); // H e l l o

// Map 과 Set 은 이터러블이다.
console.log(...new Map([['a','1'], ['b','2']])); // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3])); // 1 2 3

// 이터러블이 아닌 일반 객체는 스프레드 문법 대상이 될 수 없다.
// console.log(...{a: 1, b: 2}); // TypeError: Found non-callable @@iterator

// 스프레드 문법의 용도
// 1. 함수 호출문의 인수 목록
// 2. 배열 리터럴의 요소 목록
// 3. 객체 리터럴의 프로퍼티 목록