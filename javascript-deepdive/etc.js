console.log(typeof null); // object

// for in 반복문 : 객체의 모든 열거 가능한 속성에 대해 반복
// for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

var iterable = [3, 5, 7];
iterable.foo = "hello";

for (var key in iterable) {
    console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (var value of iterable) {
    console.log(value); // 3, 5, 7
}

// Array
for (const val of ['a', 'b', 'c']) {
    console.log(val); // 'a','b','c'
}

// String
for (const val of 'abc') {
    console.log(val); // 'a','b','c'
}

// Object
for ( let val of {1 :'a', 2 :'b', 3 :'c'} ) {
    console.log(val); // TypeError: object is not iterable
}