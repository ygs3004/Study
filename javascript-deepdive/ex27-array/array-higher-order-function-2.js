// Array.prototype.map
// 새로운 배열을 반환

let numbers = [1, 4, 9];
// 배열의 모든 요소 순회, 콜백함수 호출
// 콜백함수의 반환값들로 새로운 배열 구성
let roots = numbers.map(item => Math.sqrt(item));
// 위와 같은 코드
// let roots = numbers.map(Math.sqrt(item));

console.log(roots); // [1, 2, 3]
console.log(numbers); // [1, 4, 9]

// map 메서드는 콜백함수 호출시 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].map((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item;
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/

// 두번째 인스로 this 전달 가능, 화살표 함수 사용시 this 전달 필요없다
class Prefixer{
    constructor(prefix) {
        this.prefix = prefix;
    }

/*
    add(arr) {
        return arr.map(function (item) {
            return this.prefix + item;
        }, this); // map 메서드의 콜백 함수에서 this로 사용할 객체 전달
    }
*/
    add(arr) {
        return arr.map(item => this.prefix + item);
    }

}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// [ '-webkit-transition', '-webkit-user-select' ]


// Array.prototype.filter
// 콜백 함수의 반환값이 true 인 요소로 구성된 
// 새로운 배열을 반환

numbers = [1, 2, 3, 4, 5];
let odds = numbers.filter(item => item % 2); // item % 2 === 0 => false
console.log(odds); // [1, 3, 5]

// 콜백 함수에 (요소값, 인덱스, this) 전달
[1, 2, 3].filter((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item % 2 ;
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/

// 호출한 배열에서 특정 요소를 제거하는 filter
// 중복된 모든 요소가 제거되므로 하나만 제거할땐 indexOf 메서드와 splice 메서드 이용
class Users{
    constructor() {
        this.users = [
            { id: 1, name: 'Yoon' },
            { id: 2, name: 'GunSoo' },
        ];
    }

    // 요소 추출
    findById(id) {
        // id 가 일치하는 사용자만 반화
        return this.users.filter(user => user.id === id);
    }

    // 요소 제거
    remove(id) {
        // id가 일치하지 않는 사용자를 제거한다.
        this.users = this.users.filter(user => user.id !== id);
    }
}

let users = new Users();

let user = users.findById(1);
console.log(user); // [ { id: 1, name: 'Yoon' } ]


// id 가 1인 사용자를 제거한다.
users.remove(1);
user = users.findById(1);
console.log(users); // Users { users: [ { id: 2, name: 'GunSoo' } ] }


// Array.prototype.reduce (콜백함수, 초기값)
// 콜백함수의 반환값을 콜백 함수의 첫번째 인수로 전달
// 하나의 결과값을 반환
// 콜백함수의 인수 : (콜백함수의 반환값(첫 순회시 초기값), 요소값, 인덱스, this)
let sum = [1, 2, 3, 4,].reduce(
    (accumulator, currentValue, index, array) => accumulator + currentValue, 0);

console.log(sum);

// reduce example: 평균 구하기
let values = [1, 2, 3, 4, 5, 6];
let average = values.reduce((acc, cur, i, {length}) => {
    // 마지막 순회가 아닐시 누적값을 반환, 마지막 순회일 시 평균 계산
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0)

// reduce example: 최대값 구하기
values = [1, 2, 3, 4, 5];
let max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5
// Math.max 이용
max = Math.max(...values);
// max = Math.max.apply(null, values);

// reduce example: 요소의 중복 횟수 구하기
let fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
let count = fruits.reduce((acc, cur) => {
    // 첫번째 순회시 {} 빈객체 전달 
    // 초기값으로 전달받은 요소값을 key로 요소의 갯수를 프로퍼티 값으로 할당.
    // 프로퍼티 값이 undefined 이면 프로퍼티 값을 1로 초기화
    acc[cur] = (acc[cur] || 0) +1;
    return acc;
}, {})
console.log(count); // { banana: 1, apple: 2, orange: 2 }

// reduce example: 중첩 배열 평탄화
values = [1, [2, 3], 4, [5, 6]];
let flatten = values.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten); // [ 1, 2, 3, 4, 5, 6 ]
const a =[1, [2, 3, 4, 5]].flat(); // [1, 2, 3, 4, 5]
const b = [1, [2, 3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]

// reduce example: 중복 요소 제거
values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

result = values.reduce(
    (unique, val, i, _values) =>
        _values.indexOf(val) === i ? [...unique, val] : unique, []
);
console.log(result) // [ 1, 2, 3, 5, 4 ]
// filter로 중복요소 제거
result = values.filter((val, i, _values) => _values.indexOf(val) === i);
console.log(result); // [ 1, 2, 3, 5, 4 ]

// reduce 함수의 초기값 생략
sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur);
console.log(sum); // 10
// 초기값을 주지 않은 빈 배열의 경우 에러 발생
// sum = [].reduce((acc, cur) => acc + cur); TypeError: Reduce of empty array with no initial value
sum = [].reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 0

let products = [
    { id: 1, price: 100},
    { id: 2, price: 200},
    { id: 3, price: 300},
]

let priceSum = products.reduce(
    // 두번째 순회부터 acc의 값은 객체가 아니라 숫자가 됨
    // 아래의 경우 두번째 acc === 300
    // acc.price 는 undefined가 됨 (300.price)
    (acc, cur) => acc.price + cur.price);
console.log(priceSum); // NaN
// 초기값을 전달하며 문제해결, 언제나 전달하는 것이 안전하다.
priceSum = products.reduce(
    (acc, cur) => acc + cur.price, 0)
console.log(priceSum); // 600