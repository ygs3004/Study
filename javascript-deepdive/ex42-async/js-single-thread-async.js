// 자바스크립트는 싱글스레드 방식이다
// setTimeout과 유사한 함수
function sleep(func, delay) {
    // Date.now()는 현재 시간을 숫자(ms)로 반환
    const delayUntil = Date.now() + delay;

    while(Date.now() < delayUntil);
    // 일정시간(delay)가 경과한 이후에 콜백 호출
    func();
}

function foo() {
    console.log('foo');
}

function bar(){
    console.log('bar');
}

// sleep 함수는 실행에 3초 소요
sleep(foo, 3 * 1000);
// bar 함수는 sleep 이후 실행되며, 3초이상 블로킹 된다.
bar();

setTimeout(foo, 3*1000);
bar();
// bar 호출 -> (3초 경과 후) foo 호출

// 비동기: 현재 실행중인 태스크가 종료되지 않은 상태라 해도 곧바로 실행하는 방식을 비동기