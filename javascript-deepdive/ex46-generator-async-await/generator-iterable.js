// 제네레이터 함수를 사용하여 이터레이션 프로토콜을 준수하는 이터러블 구현이 보다 쉽게 가능

// 피보나치수열 예제
// 무한 이터러블을 생성하는 함수
const infiniteFibonacciNormalWay = (function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [pre, cur] = [cur, pre + cur];
            // 무한 이터러블이므로 done 프로퍼티를 생략
            return {value:cur};
        }
    }
}());

for (const num of infiniteFibonacciNormalWay) {
    if(num>10000) break;
    console.log(num); // 1 2 3 5 8 ... 2584 4181 6765
}

// 제네레이터를 이용할 경우
const infiniteFibonacciGenWay = (function* () {
    let [pre, cur] = [0, 1];

    while(true){
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
}());

for (const num of infiniteFibonacciGenWay) {
    if(num>10000) break;
    console.log(num);
}