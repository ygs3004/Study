// concat
// ES5
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]
// ES6
arr = [...[1, 2], ...[3, 4]];
console.log(arr);  // [1, 2, 3, 4]

// splice
// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];
// 세번째 인수 arr2 를 해체하여 전달
// 그렇지 않으면 arr1 에 arr2 배열 자체가 추가됨
arr1.splice(1, 0, arr2);
console.log(arr1); // [ 1, [ 2, 3 ], 4 ]

var arr1 = [1, 4];
var arr2 = [2, 3];

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2)); // splice 인자로 [1, 0, 2, 3]
console.log(arr1);

//ES6
var arr1 = [1, 4];
var arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1);

// slice, 스프레드 문법을 활용한 배열 복사
// 얕은 복사 된다

var origin = [1, 2];
var copy = origin.slice();
console.log(copy); // [1, 2]
console.log(copy === origin); // false

origin = [1, 2];
copy = [...origin];
console.log(copy); // [1, 2]
console.log(copy === origin); // false

// 이터러블 배열 변환
// ES5 유사배열 객체(이터러블이 아니어도 가능) ->배열로 변환
function sum() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args); // [1, 2, 3]
    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2, 3));

const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
};

arr = Array.prototype.slice.call(arrayLike);
console.log(arr); // [1, 2, 3]
console.log(Array.isArray(arr)); // true

// ES6, 스프레드 문법 이터러블 유사배열 객체에 가능
sum = function(){
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)) // 6

// Rest 파라미터 이용
// 인수를 배열로 전달받음
sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum(1, 2, 3)); // 6

// 이터러블이 아닌 유사배열 객체 => 배열은 Array.from 메서드 이요
console.log(arrayLike);
console.log(Array.from(arrayLike)); // [1, 2, 3]
