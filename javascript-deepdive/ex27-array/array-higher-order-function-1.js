// 고차 함수 : 함수를 인수로 전달받거나 반환하는 함수
// 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향
// 조건문과 반복문을 제거, 변수의 사용을 억제
// 순수 함수를 통해 부수효과를 최대한 억제

// Array.prototype.sort
// 인자로 비교함수를 전달

let fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순 정렬
fruits.sort();
// 원본을 직접 변경
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
// 내림차순 정렬 : sort().reverse();
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

let points = [40, 100, 1, 5, 2, 25, 10];
points.sort();
console.log(points); // [1, 10, 100, 2, 25, 40, 5] -> 문자열로 변경후 유니코드의 포인트의 순서를 따름

// 비교함수 전달, 비교함수의 값이 0보다 클경우 자리를 바꿈
// 오름차순
points.sort((a, b) => a - b);
console.log(points); // [1, 2, 5, 10, 25, 40, 100]

// 내림차순
points.sort((a, b) => b - a);
console.log(points); // [100, 40, 25, 10, 5, 2, 1]

// 객체 정렬
const todos = [
    {id: 4, content: 'JavaScript'},
    {id: 1, content: 'HTML'},
    {id: 2, content: 'CSS'},
]

// 비교함수
function compare(key) {
    // 프로퍼티 값이 문자일 경우 산술 연산으로 비교하면 NaN이 나오므로 비교 연산 사용
    // 양수 / 음수 / 0 을 반환하면 가능
    return (a, b) => (a[key] > b[key] ? 1 : (a[key]) < b[key] ? -1 : 0);
}

todos.sort(compare('id'));
console.log(todos);
/*
    [
        { id: 1, content: 'HTML' },
        { id: 2, content: 'CSS' },
        { id: 4, content: 'JavaScript' }
    ]
*/

todos.sort(compare('content'));
console.log(todos);
/*
    [
        { id: 2, content: 'CSS' },
        { id: 1, content: 'HTML' },
        { id: 4, content: 'JavaScript' }
    ]
*/

// Array.prototype.forEach()
// (요소값, 인덱스, this)의 인수 전달
// 기본적으로 원본배열을 변경하지 않는다.(this)
// 콜백을 이용해서 원본배열 변경 또한 가능
// 반환값은 언제나 undefined
// 두번째 인자로 this 전달이 가능하나 화살표 함수가 좋음
// for문과 달리 break, continue 사용 불가, 모두 순회해야함
// 희소배열의 경우 존재하지 않는 요소는 제외

[1, 2, 3].forEach((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`)
});
/*
    요소값: 1, 인덱스: 0, this: [1,2,3]
    요소값: 2, 인덱스: 1, this: [1,2,3]
    요소값: 3, 인덱스: 2, this: [1,2,3]
*/

let numbers = [1, 2, 3];

numbers.forEach((item, index, arr) => {
        arr[index] = item ** 2;
});

console.log(numbers); // [1, 4, 9]
result = [1, 2, 3].forEach(console.log);
console.log(result); // undefined

class Numbers{
    numberArray = [];
    multiply(arr) {
        arr.forEach(function (item) {
            this.numberArray.push(item * item);
        }, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체 전달
    }
    /* 화살표 함수로 하는게 더 좋다
    * multiply(arr){
    *   arr.forEach(item => this.numberArray.push(item*item));
    * }
    *
    * */
}

numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray) // [1, 4, 9]

// forEach 폴리필(최신 사양의 기능을 지원하지 않는 브라우저를 위해 누락된 최신 사양의 기능 구현, polyfill
if(!Array.prototype.forEach){
    Array.prototype.forEach = function (callback, thisArg) {
        // 첫번재 인수가 함수가 아니면 에러
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        
        // this로 사용할 두 번째 인수를 전달받지 못하면 전역 객체를 this로 사용
        thisArg = thisArg || globalThis; // window

        // for문을 돌면서 콜백 호출
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this); // 배열 요소, 인덱스, 배열 자신을 전달
        }
    };
}

[1, 2, 3].forEach(item => {
    console.log(item);
    // if (item > 1) break; SyntaxError: Illegal break statement
    // if (item > 1) continue; SyntaxError: Illegal continue statement: no surrounding iteration statement
})

// 희소배열 : 존재하지 않는 요소 순회대상에서 제외
arr = [1, ,3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 undefined 3
}
arr.forEach(v => console.log(v)) // 1 3
