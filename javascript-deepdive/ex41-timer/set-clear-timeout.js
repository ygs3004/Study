// delay 시간이후 태스크 큐에 콜백함수를 등록
// 1초(1000ms) 타이머가 만료되면 콜백 호출

// setTimeout(func|code [, delay, param1, param2, ...]);
setTimeout(() => console.log('Hi!'), 1000);

// 인수('Yoon') 전달
setTimeout(name => console.log(`Hi! ${name}`), 1000,'Yoon');

// 두 번째 인수(delay) 생략시 기본값 0 지정
setTimeout(() => console.log("기본값은 0입니다."));

// 반환한 값을 이용하여 clearTimeout 호출시 스케쥴링 취소
// 브라우저 환경은 숫자, Node.js 는 객체 반환
const timerId = setTimeout(() => console.log("Hi, timerId Saved!"), 1000 );
clearTimeout(timerId);
