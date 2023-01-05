// 일반 객체를 이터러블처럼 구현
const iterable = {
    // Symbol.iterator 메서드를 구현, 이터러블 프로토콜 준수
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;
        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환

        return {
            next() {
                return { value:cur++, done: cur > max + 1 }
            },
        }
    },
};

for (const num of iterable) {
    console.log(num); // 1 2 3 4 5
}