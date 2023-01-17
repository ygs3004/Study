// Promise.resolve
// 인수로 전달받은 값을 resolve 하는 프로미스 생성
const resolvePromise = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log);
// 위 코드와 같은 코드
// const resolvePromise = new Promise(resolve => resolve([1, 2, 3]));
// resolvePromise.then(console.log)

// Promise.reject
// 인수로 전달받은 값을 reject 하는 프로미스 생성
const rejectedPromise = Promise.reject(new Error('Error'));
rejectedPromise.catch(console.log); //  Error: Error

// Promise.all
// 여러개의 비동기 처리를 모두 병렬 처리할때 사용
const requestData1 = () =>
    new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () =>
    new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () =>
    new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 세 개의 비동기 처리를 순차적으로 처리
const res = [];
requestData1()
    .then( data => {
        res.push(data);
        return requestData2();
    })
    .then(data => {
        res.push(data);
        return requestData3();
    })
    .then(data => {
        res.push(data);
        console.log(res); // [1, 2, 3] => 약 6초 소요
    })
    .catch(console.error);

// 세 개의 비동기 처리를 병렬로 처리
// Promise.all 은 처리 순서가 보장됨
Promise.all([requestData1(), requestData2(), requestData3(), "병렬처리"])
    .then(console.log)// [ 1, 2, 3, '병렬처리' ] => 약 3초 소요
    .catch(console.error);
// 하나라도 rejected 상태가 되면 즉시 종료
Promise.all([
    new Promise((_, reject) => setTimeout(() => reject(new Error('Error 1')), 3000)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Error 2')), 2000)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Error 3')), 1000))
])
    .then(console.log)
    .catch(console.log); // Error: Error 3

// Promise.all 인수로 전달받은 이터러블의 요소 중에 프로미스가 아닌 것을 Promise.resolve로 래핑한다.
Promise.all([
    1, // Promise.resolve(1)
    2, // Promise.resolve(2)
    3, // Promise.resolve(3)
    "프로미스 래핑" // Promise.resolve("프로미스 래핑")
])
    .then(console.log) // [ 1, 2, 3, '프로미스 래핑' ]
    .catch(console.log);