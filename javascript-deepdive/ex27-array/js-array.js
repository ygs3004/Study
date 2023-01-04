// 밀집배열 : 하나의 데이터 타입, 동일한 크기의 메모리 공간에서 연속적 나열
// 희소배열 : 밀집배열이 아닌 배열
// javascript 의 배열은 배열을 흉내낸 특수객체
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
    {
        '0': { value: 1, writable: true, enumerable: true, configurable: true },
        '1': { value: 2, writable: true, enumerable: true, configurable: true },
        '2': { value: 3, writable: true, enumerable: true, configurable: true },
        length: { value: 3, writable: true, enumerable: false, configurable: false }
    }
*/

// 어떠한 타입이라도 배열의 값이 될 수 있다
const arr = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function () {}
];

// 일반적인 배열은 인덱스 요소로 접긑ㄴ 속도가 빠르지만, 삽입 / 삭제가 효율적이지 않음
// javascript 배열은 반대임

// 모던 자바스크립트 엔진은 일반 객체와 구별하여 최적화 됀 편

const Arr = [];

console.time('Array Performance Test');
for (let i = 0; i < 10000000; i++) {
    Arr[i] = i;
}
console.timeEnd('Array Performance Test');
// Array Performance Test: 190.381ms

const obj = {};

console.time('obj Performance Test');
for (let i = 0; i < 10000000; i++) {
    obj[i] = i;
}
console.timeEnd('obj Performance Test');
// obj Performance Test: 276.132ms