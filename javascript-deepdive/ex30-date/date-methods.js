// Date.now()
// UTC 기점 현재까지 milliseconds 로 반환
let milliseconds = Date.now();
console.log(milliseconds); // 1672885391484

let now = new Date(milliseconds);
console.log(now); // 2023-01-05T02:23:11.484Z

// Date.parse
// 전달된 지정 시간을 밀리초로 반환
milliseconds = Date.parse('1970/01/02/09:00:00')
console.log(milliseconds);

milliseconds = Date.parse('Jan 5, 2023 11:24:00')
console.log(milliseconds);

// Date.prototype.toLocaleString
// 인수로 전달한 Locale을 기준으로 날짜와 시간을 표현한 문자열 반환
let today = new Date();
console.log(today.toString()); // Thu Jan 05 2023 12:45:02 GMT+0900 (대한민국 표준시)
console.log(today.toLocaleString()) // 2023. 1. 5. 오후 12:45:39
console.log(today.toLocaleString('ko-KR')); // 2023. 1. 5. 오후 12:45:39
console.log(today.toLocaleString('en-US')); // 1/5/2023, 12:46:13 PM
console.log(today.toLocaleString('ja-JP'));// 2023/1/5 12:46:13

// Date를 활용한 시계 예제
(function printNow(){
    const today = new Date();

    const dayNames = [
        '(일요일)',
        '(월요일)',
        '(화요일)',
        '(수요일)',
        '(목요일)',
        '(금요일)',
        '(토요일)',
    ];

    const day = dayNames[today.getDay()]; // getDay() 0(일요일)~6(토요일) 숫자로 반환

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    
    // 12시간제로 변경
    hour %= 12;
    hour = hour || 12; // hour 가 0이면 12를 재할당

    // 10 미만인 분과 초를 2자리로 변경
    minute = minute < 10? '0' + minute : minute;
    second = second < 10? '0' + second : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

    console.log(now);
    
    // 1초마다 printNow 함수를 재귀 호출
    setTimeout(printNow, 1000);

}());

