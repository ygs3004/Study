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