// Array.prototype.some
// 모든 배열 요소 순환
// 콜백 함수의 반환값이 단 한번이라도 참이면 true
// 모두 거짓이면 false
// 빈 배열일 경우 언제나 false
let isTrue = [5, 10, 15].some(item => item > 10); // 단 하나의 경우만 true
console.log(isTrue); // true

isTrue = [5, 10, 15].some(item => item < 0); // 모두 false
console.log(isTrue); // false

isTrue = [].some(item => item === undefined); // false
console.log(isTrue); // false


// Array.prototype.every
// 모든 배열 요소 순환
// 콜백 함수의 반환값이 단 한번이라도 거짓이면 false
// 모두 참이면 true
// 빈 배열일 경우 언제나 true
isTrue = [5, 10, 15].every(item => item > 3); // 모두 true
console.log(isTrue); // true

isTrue = [5, 10, 15].every(item => item > 10); // 일부 True
console.log(isTrue); // false

isTrue = [].every(item => 1 === 0); // 조건은 false 지만 빈배열이므로
console.log(isTrue); // true


// Array.prototype.find
// 모든 배열 요소 순환
// 콜백 함수의 반환값이 true 인 첫번재 요소 반환 => 결과값은 배열이 아니라 요소값
// true 인 요소가 없다면 undefined 반환
// 콜백함수에 (요소값, 인덱스, this) 전달
let users = [
    { id: 1, name: 'Yoon'},
    { id: 2, name: 'Kim'},
    { id: 2, name: 'Choi'},
    { id: 3, name: 'Park'},
];

// id가 2인 첫 번째 요소를 반환한다. find 메서드는 배열이 아니라 요소를 반환
let result = users.find(user => user.id === 2);
console.log(result); // { id: 2, name: 'Kim' }

// Array.prototype.findIndex
// 인수로 콜백함수 전달, 반환값이 true 인 첫 번째 요소의 인덱스를 반환
// true 값이 존재하지 않는다면 -1을 반환

users =[
    { id: 1, name: 'Yoon'},
    { id: 2, name: 'Kim'},
    { id: 2, name: 'Choi'},
    { id: 3, name: 'Park'},
];

result = users.findIndex(user => user.id === 2);
console.log(result); // 1

result = users.findIndex(user => user.name === 'Park');
console.log(result); // 3
// 콜백함수 추상화
function predicate(key, value){
    // key와 value를 기억하는 클로저 반환
    return item => item[key] === value;
}

result = users.findIndex(predicate('id', 2));
console.log(result); // 1


result = users.findIndex(predicate('name', 'Park'));
console.log(result); // 3


// Array.prototype.flatMap
// map 과 flat 을 순차적으로 실행한 효과
// flatMap은 1단계만 평탄화함
arr = ['hello', 'world'];
result = arr.map(x => x.split(''));
console.log(result); // [ [ 'h', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd' ] ]
console.log(result.flat()) // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

result = arr.flatMap(x => x.split(''));
console.log(result); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
// 1단계만 평탄화
result = arr.flatMap((str, index) => [index, [str, str.length]]);
console.log(result); // [ 0, [ 'hello', 5 ], 1, [ 'world', 5 ] ]
// 깊이 지정이 필요하면 map 과 flat 호출
result = arr.map((str, index) => [index, [str, str.length]]).flat(2);
console.log(result); // [ 0, 'hello', 5, 1, 'world', 5 ]

