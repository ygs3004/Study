// Date 객체는 내부적으로는 UTC 기준 정수값을 갖지만 날짜 / 시간정보를 출력
console.log(new Date());
// new 를 제거시 Date 객체가 아닌 문자열을 반환
console.log(Date());

// 숫자를 인수로 사용시 1970년 1월 1일 00:00:00(UTC) 기준으로 경과한 milliseconds 로 적용
console.log(new Date(0)) // 1970-01-01T00:00:00.000Z
/*
8640000ms => 1day
1s x 1000ms x 60s x 60m * 24h
* */
// new Date(milliseconds)
console.log(new Date(86400000)) // 1970-01-02T00:00:00.000Z

// new Date(dateString) : dateString -> Date.parse 가능해야함
console.log(new Date('Jan 05, 2023 11:12:00'))

// new Date(year, month[, day, hour, minute, second, millisecond]) 연, 월은 반드시 지정해야함
