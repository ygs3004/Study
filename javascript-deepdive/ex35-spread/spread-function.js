let arr = [1, 2, 3];

let max = Math.max(arr);
console.log(max); // NaN

max = Math.max([1, 2, 3]);
console.log(max); // NaN

// ES5
max = Math.max.apply(null, arr);
console.log(max); // 3

// ES6 (스프레드)
max = Math.max(...arr);
console.log(max); // 3

// Rest 파라미터와 반대개념
// Rest 파라미터는 인수들의 목록을 배열로 변환
function foo(...rest) {
    console.log(rest); // 1, 2, 3 -> [1, 2, 3]
}

// 스프레드 문법은 배열의 이터러블을 펼쳐서 개별의 값으로 변환
// [1, 2, 3] -> 1, 2, 3
foo(...[1,2,3]);