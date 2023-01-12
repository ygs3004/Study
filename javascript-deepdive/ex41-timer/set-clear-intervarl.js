// setInterval : 두번째 인자로 전달받은 시간마다 반복 동작한다.
let count = 1;

const timeoutId = setInterval(() => {
    console.log(count);
    if(count++ === 5) clearInterval(timeoutId);
}, 1000)


