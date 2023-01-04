// 추가, 삭제시 배열의 length 자동 갱신
const arr = [1, 2, 3];
console.log(arr.length); // 3

// 추가
arr.push(4);
console.log(arr.length); // 4

// 삭제
arr.pop();
console.log(arr.length); // 3

// length 에 작은값 할당시 값 제거
arr.length = 1;
console.log(arr);

// length 에 큰 값 할 당시 변경되지만, 배열에는 변함이 없다.
arr.length = 3;
console.log(arr.length); // 3
console.log(arr); //
console.log(Object.getOwnPropertyDescriptors(arr));
/*
    {
        '0': { value: 1, writable: true, enumerable: true, configurable: true },
        length: { value: 3, writable: true, enumerable: false, configurable: false }
    }
*/


// 희소배열
const sparse = [, 2, , 4];

// length 프로퍼티 값은 요소의 개수와 일치하지 않음
console.log(sparse.length); // 4
console.log(sparse);
console.log(Object.getOwnPropertyDescriptors(sparse));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}

* */

// length, 배열요소의 개수, 데이터타입이 일치하지 않을수 있음 => 희소배열
// 희소배열로 사용하지 않는것이 좋다