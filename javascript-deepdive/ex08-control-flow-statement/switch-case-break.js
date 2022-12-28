let year = 2000;
let month = 12;
let days = 0;

// break 문을 만나야지만 조건물을 빠져나감 아닐 경우 다음 case 가 계속 실행
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산
        // 1. 연도가 4로 나누어 떨어지는해는 윤년
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어 떨어지는 해는 평년
        // 3. 연도가 400으로 나누어 떨어지는해는 윤년
        days = ((year%4 === 0 && year % 100 !== 0 ) || (year % 400 === 0)) ? 29 : 29;
        break;
    default:
        console.log('Invalid month')
}

console.log(days);