// Array.prototype.slice
// 범위의 요소를 복사, 원본을 변경하지 않음
// 첫번째 인자 start: 복사 시작 위치 음수일 경우 뒤에서부터, 해당 인덱스 포함
// 두번째 인자 end: 생략 가능, 생략시 기본값은 length 프로퍼티 값 복사 종료 위치, 해당 인덱스 미포함

let arr = [1, 2, 3];

console.log(arr.slice(0, 1)); // [1]
console.log(arr.slice(1, 2)); // [2]

console.log(arr); // [1, 2, 3] 원본은 변경되지 않음

// 두번째 인사 미포함시 모든 요소 복사
console.log(arr.slice(1)); // [2, 3]

// 음수일시 뒤에서 부터
console.log(arr.slice(-1)); // [3]
console.log(arr.slice(-2)); // [2, 3]

// 인자 생략시 모두 복사
let copy = arr.slice();
console.log(copy); // [1, 2, 3]
console.log(copy === arr); // false

// 생성된 복사본은 얕은복사
const todos = [
    { id:1, content:'HTML', completed: false},
    { id:2, content:'CSS', completed: true},
    { id:3, content:'Javascript', completed: true},
]

// 얕은 복사
const _todos = todos.slice();
// const _todos = [...todos];
console.log(todos === _todos); // false

// 배열 요소의 참조값은 같다 => 얕은 복사
console.log(_todos[0] === todos[0]); // true

// 깊은 복사는 Lodash 라이브러리의 cloneDeep 메서드를 이용하는것이 좋다.


// Array.prototype.join
// 인자로 연결한 문자열을 반환, 기본 구분자는 ','
arr = [1, 2, 3, 4];
console.log(arr.join());    // 1,2,3,4
console.log(arr.join(''));  // 1234
console.log(arr.join(':')); // 1:2:3:4


// Array.prototype.reverse
// 배열의 순서를 뒤집는다. 원본배열 변경
arr = [1, 2, 3];
result = arr.reverse();
console.log(arr);    // [ 3, 2, 1 ]
console.log(result); // [ 3, 2, 1 ]


// Array.prototype.fill
// 원본을 변경한다.
// 전달받은 첫번재 인수로 처음부터 끝까지 요소로 채운다.
// 두번째 인수의 인덱스부터 시작한다.
// 세번재 인수의 인덱스에서 멈춘다.
arr = [1, 2, 3];
arr.fill(0);
console.log(arr); // [0, 0, 0]

arr = [1, 2, 3, 4, 5];
arr.fill(0, 1);
console.log(arr); // [1, 0, 0, 0, 0]

arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4, 5]

arr = new Array(3);
console.log(arr); // [ <3 empty items> ]
result = arr.fill(1);

// 원본 배열을 직접 변경, 변경된 배열을 반환
console.log(arr); // [1, 1, 1]
console.log(result); // [1, 1, 1]

// Array.from 사용시 콜백 함수로 여러가지 값으로 채우기 가능
const sequence = (length = 0) => Array.from({length}, (_, i) => i);
console.log(sequence(3)); // [0, 1, 2]


