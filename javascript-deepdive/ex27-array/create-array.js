// 생성자 함수
// 인수가 하나이고 숫자인 경우 length 프로퍼티로 배열 생성

const arr = new Array(10);
console.log(arr); // [ <10 empty items> ]
console.log(arr.length); // 10
console.log(Object.getOwnPropertyDescriptors(arr));
/*
    length 프로퍼티 값은 0이 아니지만 실제 배열 요소는 존재하지 않음
    {
        length: { value: 10, writable: true, enumerable: false, configurable: false }
    }
*/

// 최대 요소 개수 : 4294967295
new Array(4294967295);
// new Array(4294967296); RangeError: Invalid array length
// 전달된 인수가 음수이면 에러
// new Array(-1); RangeError: Invalid array length

console.log(new Array()); // []

// 인수가 두개이상이거나 숫자가 아닌 경우 : 요소로 갖는 배열 생성
// new 를 빼도 생성됨 (생성자 함수내에서 new.target을 확인)
console.log(Array(1, 2, 3)); // [1, 2, ,3]
console.log(Array({})); // [{}]

// Array.of : 전달된 인수가 1개, 숫자여도 배열 생성
console.log(Array.of(1)); // [1]

// Array.from(ES6) : 유사배열 객체, 이터러블을 변환하여 배열 생성
console.log(Array.from({length: 2, 0: 'a', 1: 'b'})); // [ 'a', 'b' ]
console.log(Array.from('Hello')); // [ 'H', 'e', 'l', 'l', 'o' ]

// length 만존재하는 유사 배열 객체 전달시 undefined로 요소를 채움
console.log(Array.from({length: 3})); // [ undefined, undefined, undefined ]

// 두번째 인수로 콜백 전달시 콜백함수의 반환값으로 배열을 구성하여 반환
console.log(Array.from({length:3}, (_, i) => i));


// 유사 배열 객체: 인덱스로 프로퍼티 값에 접근 가능, length 프로퍼티를 갖고 있는 객체, for 문 순회 가능
// 이터러블(iterable) 객체 : Symbol.iterator 메서드를 구현, for...of 문 순회가능, 스프레드 문법, 배열 디스트럭처링 할당 가능
