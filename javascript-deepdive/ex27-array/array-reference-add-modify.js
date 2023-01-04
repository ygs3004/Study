let arr = [1, 2];

// 인덱스로 참조
console.log(arr[0]); // 1
// 존재하지 않는 요소 접근시 udnefined
console.log(arr[2]); // undefined

// 희소배열에서 존재하지 않는 요소 참조도 마찬가지
arr = [1, ,3];
console.log(Object.getOwnPropertyDescriptors(arr));
/*
    {
        '0': { value: 1, writable: true, enumerable: true, configurable: true },
        '2': { value: 3, writable: true, enumerable: true, configurable: true },
        length: { value: 3, writable: true, enumerable: false, configurable: false }
    }
*/

console.log(arr[1]); // undefined

// length 프로퍼티보다 큰 인덱스로 요소 추가시 희소배열이 된다

arr[100] = 100;
console.log(Object.getOwnPropertyDescriptors(arr));
/*
    {
        '0': { value: 1, writable: true, enumerable: true, configurable: true },
        '2': { value: 3, writable: true, enumerable: true, configurable: true },
        '100': { value: 100, writable: true, enumerable: true, configurable: true },
        length: {
            value: 101,
                writable: true,
                enumerable: false,
                configurable: false
        }
    }
*/

// 0이상의 정수가 아닌 값을 인덱스로 사용시 요소가 아니라 프로퍼티가 된다. length에 영향을 주지 않는다.
arr = [];

// 배열 요소의 추가
arr[0] = 1;
arr['1'] = 2;
console.log(arr);

// 프로퍼티 추가
arr['foo'] = 3;
arr.bar = 4;
arr[1.1] = 5;
arr[-1] = 6;
console.log(arr);
console.log(arr.length); // 2
console.log(Object.getOwnPropertyDescriptors(arr));
/*
    {
        '0': { value: 1, writable: true, enumerable: true, configurable: true },
        '1': { value: 2, writable: true, enumerable: true, configurable: true },
        length: { value: 2, writable: true, enumerable: false, configurable: false },
        foo: { value: 3, writable: true, enumerable: true, configurable: true },
        bar: { value: 4, writable: true, enumerable: true, configurable: true },
        '1.1': { value: 5, writable: true, enumerable: true, configurable: true },
        '-1': { value: 6, writable: true, enumerable: true, configurable: true }
    }
*/


