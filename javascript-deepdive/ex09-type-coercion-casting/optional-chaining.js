// 옵셔널 체이닝 연산지 ?.
// null 또는 undefined일 경우 undefined 반환
// Falsy 값을 체크하는게 아니다

let elem = null;

// elem 이 Falsy 값이면 elem 으로 평가, elem 이 Truthy 값이면 elem.value로 평가
let value = elem && elem.value;
console.log(value); // null

let str = ''; 
let length = str && str.length;
// 문자열 길이가 0이지만 Falsy 하므로 문자열 길이를 참조하지 못한다
console.log(length); // '' 출력되지 않음

// 옵셔널 체이닝의 경우
let str2 = '';
let length2 = str2?.length;
console.log(length2); // 0