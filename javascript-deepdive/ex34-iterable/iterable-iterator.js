// 이터러블이면서 이터레이터인 객체
// 이터레이터를 반환하는 Symnbol.iterator 메서드
// 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
//
// let a =
// {
//     [Symbol.iterator]() {return this;},
//     next(){
//         return { value: any, done: boolean}
//     }
// }

let fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메서드와 next 메서드를 소유한 이터러블이면서 이터레이터인 객체 반환
    return {
        [Symbol.iterator](){return this;},
        next(){
            [pre, cur] = [cur, pre + cur];
            return { value:cur, done: cur >= max}
        }
    }
};

// iter 는 이터러블이면서 이터레이터
let iter = fibonacciFunc(10);

for (const num of iter) {
    console.log(num); // 1 2 3 5 8
}

iter = fibonacciFunc(10);

console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 5, done: false }
console.log(iter.next()); // { value: 8, done: false }
console.log(iter.next()); // { value: 13, done: true }

// 무한 이터러블을 생성하는 함수
fibonacciFunc = function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator](){return this;},
        next() {
            [pre, cur] = [cur, pre + cur];
            // 무한을 구현해야 하므로 done 을 생략
            return {value: cur}
        },
    }
};

for (const num of fibonacciFunc()) {
    if(num > 10000) break; // 무한은 조건문에서 멈춰준다
    console.log((num)); // 1 2 3 5 8 .... 4181 6765
}

// 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개의 요소만 취득한다.
const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3); // 1 2 3