// 원본 배열을 변경하는 메서드(mutator method), 생성하여 반환하는 메서드(accessor method)가 있음
// mutator : push, pop, unshift, shift
let arr = [1];

// 직접 변경
arr.push(2);
console.log(arr); // [1, 2]

// 생성하여 반환
let result = arr.concat(3);
console.log(arr); // [1, 2]
console.log(result); // [1, 2, 3]

// 직접 병경시 외부 상태를 변경할 가능성이 있으므로 accessor method 사용이 좋다

// isAraary 배열이면 true, 아니면 false
// true
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(new Array()));

// false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray({0:1, length:1}));


// indexOf 배열에서 요소를 검색하여 요소가 일치하는 첫번째 인덱스 반환
arr = [1, 2, 2, 3];

console.log(arr.indexOf(2)); // 1
// 값이 없을시 -1 반환
console.log(arr.indexOf(4)); // -1
// 두번째 인자는 검색을 시작할 인덱스
console.log(arr.indexOf(2, 2)); // 2

// inculdes 요소가 존재하는지 체크
const foods = ['apple', 'banana', 'orange'];
console.log(foods)
console.log(foods.includes('orange'));


// Array.prototype.push
// 마지막 배열 요소로 추가하고, length 프로퍼티 값을 반환
result = arr.push(3, 4);
console.log(result); // 6
console.log(arr); // [ 1, 2, 2, 3, 3, 4 ] -> 원본 메서드를 변경


// 스프레드 : 원본 배열 변경하지않음
arr = [1, 2];
let newArr = [...arr, 3];
console.log(newArr);


// Array.prototype.pop
// 원본에서 마지막 요소를 제거하고 반환, 원본 배열을 직접 변경
// 원본이 비어있을경우 undefined 반환
arr = [1, 3];
result = arr.pop();
console.log(result); // 3
console.log(arr); // [1]

