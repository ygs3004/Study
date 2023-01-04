// Array.prototype.unshift
// 원본배열 직접 변경, 배열의 선두에 추가, length 값 반환
let arr = [1, 2];
let result = arr.unshift(3, 4);
console.log(result); // 4
console.log(arr); // [3, 4, 1, 2]

// 스프레드 문법
arr = [1, 2];
let newArr = [3, ...arr];
console.log(result); // 4
console.log(arr); // [1, 2]
console.log(newArr) // [3, 1, 2]


// Array.prototype.shift
// 첫번째 요소 제거하고 해당 요소를 반환
// 원본 배열을 직접 변경
arr = [4, 2];
result = arr.shift();
console.log(result); // 4
console.log(arr); // [2]


// Array.prototype.concat
// 원본을 변경하지 않음, 마지막에 요소 추가
let arr1 = [1, 2];
let arr2 = [3, 4];
result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

result = arr1.concat(arr2, 5);
console.log(result); // [ 1, 2, 3, 4, 5 ]

console.log(arr1); // [1, 2] -> 원본 배열은 변경되지 않는다.


// Array.prototype.splice
// 원본 변경 메소드
// 제거한 요소를 새로운 배열로 반환한다.
// 제거할 개수 생략시 시작 인덱스부터 모두 제거, 0일시 0개 제거

arr = [1, 2, 3, 4];
// 첫번째 인자 : 제거 시작 인덱스, 두번째 인자 : 제거 개수, 세번째 부터의 인자 : 배열에 추가
result = arr.splice(1, 2, 20, 30, 40);

arr = [1, 2, 3, 4];
result = arr.splice(1, 0, 100);

// 원본 배열 변경
console.log(arr); // [ 1, 100, 2, 3, 4 ]

// 제거한 요소가 배열로 반환
console.log(result); // []

// indexOf, filter를 통해 특정 요소제거

arr = [1, 2, 3, 1, 2];

// 아이템 요소가 여러개면 첫번째만 제거하는 함수 구현
function remove(array, item) {
    // 제거할 아이템의 index 취득
    const index = array.indexOf(item);
    
    // item 이 있다면 제거
    if (index !== -1) {
        array.splice(index, 1);
    }

    return array;
}

console.log(remove(arr, 2)); // [1, 3, 1, 2];
console.log(arr); //  [1, 3, 1, 2]; 원본도 변경
console.log(remove(arr, 2)); // [1, 3, 1];
console.log(remove(arr, 10)); // [1, 3, 1]; 없다면 제거 없음

// 배열에서 모든 item 요소를 제거하는 함수 구현
arr = [1, 2, 3, 1, 2];

function removeAll(array, item) {
    return array.filter(v => v !== item);
}

console.log(removeAll(arr, 2)); // [1, 3, 1]
console.log(arr); // [1, 2, 3, 1, 2] 원본 변경 안함(filter 함수)