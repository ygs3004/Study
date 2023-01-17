setTimeout(() => console.log(1), 0);

Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));

// 프로미스의 후속 처리 메스드 콜백함수는 마이크로 태스크 큐에 저장됨
// 이벤트 루프의 우선순위 마이크로태스트 큐 > 태스크 큐