// 에러는 호출자 방향으로 전파된다.
// 실행 컨텍스트가 푸시되기 직전 실행 컨텍스트 방향
// 비동기 함수의 콜백 함수를 호출한 것은 비동기 함수가 아니다 -> try catch 문 안됨
try {
    setTimeout(() => {throw new Error('Error!')}, 1000);
} catch (e) {
    // 에러를 캐치하지 못함
    console.error('캐치할 경우 나타날 문구 : 캐치한 에러입니다.', e);
}

// async/await 를 이용하여 비동기 함수를 명시적 호출가능(호출자가 명확)
// try catch 가능

import fetch from 'node-fetch';

const foo = async () => {
    try {
        const wrongUrl = 'https://wrong.url';

        const response = await fetch(wrongUrl);
        const data = await response.json();
        console.log(data);
    } catch (err){
        console.error("async/await 에러 캐치", err); // async/await 에러 캐치 FetchError: request to https://wrong.url/ failed, reason: getaddrinfo ENOTFOUND wrong.url
    }
}
foo();

// async 함수내에서 catch 문을 사용하지 않을시 에러를 reject 하는 Promise 반환
// Promise.prototype.catch 메서드로 캐치 가능
const catchMethodTest = async () => {
    const wrongUrl = 'https://wrong.url';

    const response = await fetch(wrongUrl);
    const data = await response.json();
    return data;
};

catchMethodTest()
    .then(console.log)
    .then(console.error); // (node:14128) UnhandledPromiseRejectionWarning: FetchError: request to https://wrong.url/ failed, reason: getaddrinfo ENOTFOUND wrong.url
