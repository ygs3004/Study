// 피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
    // Symbol.iterator 메서드를 구현, 이터러블 프로토콜을 준수한다.
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        const max = 10; // 수열의 최대값

        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야하고
        // next 메서드는 이터레이트 리절트 객체를 반환해야 한다.
        return {
            next() {
                [pre, cur] = [cur, pre+cur];
                // 이터레이터 리절트 객체를 반환
                return {value: cur, done: cur >= max};
            },
        }
    },
}

// 이터러블인 fibonacci 가 객체를 순회할때마다 next 메서드를 호출
for (const num of fibonacci) {
    console.log(num); // 1 2 3 5 8
}

// 스프레드 문법 가능
const arr = [...fibonacci];
console.log(arr); // [ 1, 2, 3, 5, 8 ]

// 배열 디스트럭처링 할당
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest); // 1 2 [ 3, 5, 8 ]

// 외부 인자 전달시 함수로 만들면 된다.
const fibonacciFunc = function(max) {

    let [pre, cur] = [0, 1];
    // Symbol.iterator 메서드를 구현, 이터러블 프로토콜을 준수한다.
    return{
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {value: cur, done: cur >= max};

                }
            };
        }
    };
};

for (const num of fibonacciFunc(10)) {
    console.log(num); // 1 2 3 5 8
}