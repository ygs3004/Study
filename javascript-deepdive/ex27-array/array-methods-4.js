// Array.prototype.includes
// 요소가 포함되어있는지 확인 -> true, false 반환
// 첫번재 인자 : 검색 요소 , 두번재 인자 : 시작 인덱스
// 두번째 인자가 음수일 경우 arr.length-음수 부터 확인
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(100)); // false

// indexOf를 사용할 경우 반환값이 -1인지 체크가 필요하고, NaN이 포함되어있는지 확인 할 수 없다는 문제 발생
console.log([NaN].indexOf(NaN)  !== -1); // false
console.log([NaN].includes(NaN)); // true

// Array.prototype.flat
// 재귀적으로 배열을 평탄화
// 배열을 평탄화할 깊이를 인수로 전달 가능, 기본값 : 1
// 모두 평탄화를 원할시 Infinity
console.log([1, [2, 3, 4, 5]].flat()); // [ 1, 2, 3, 4, 5 ]
console.log([1, [2, [3, [4]]]].flat()); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log([1, [2, [3, [4]]]].flat(1)); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log([1, [2, [3, [4]]]].flat(2)); // [ 1, 2, 3, [ 4 ] ]
console.log([1, [2, [3, [4]]]].flat(Infinity)); // [ 1, 2, 3, 4]



