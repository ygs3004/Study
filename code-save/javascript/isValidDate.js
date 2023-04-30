/*날짜 정규형 체크*/
const isValidDate = (date) => {
    // YYYY-MM-DD 형식
    const regex1 = /^\d{4}-\d{2}-\d{2}$/;
    // YYYYMMDD 형식
    const regex2 = /^\d{8}$/;
    // 'YYYY/MM/DD' 형식
    const regex3 = /^(\d{4})\/(0?[1-9]|1[0-2])\/(0?[1-9]|[1-2][0-9]|3[0-1])$/;
    if(!regex1.test(date) && !regex2.test(date) && !regex3.test(date)) return false;
    date = date.split('-').join('').split('/').join('');
    const year = date.substr(0, 4);
    const month = date.substr(4, 2);
    const day = date.substr(6, 2);
    console.log(year, month, day);
    // 월은 1 ~ 12 사이의 값을 가져야 함
    if (month < 1 || month > 12) {
        console.log("유효하지 않은 월입니다.\n(1~12월로 입력하여주세요)");
        return false
    }
    // 일은 해당 월의 일수 범위 내에 있어야 함
    if (day < 1 || day > new Date(year, month, 0).getDate()){
        console.log("유효하지 않은 일입니다.\n(해당 월에 존재하는 날짜인지 확인해주세요)");
        return false
    }
    return true
}

console.log(isValidDate('20220101'));
console.log(isValidDate('2022/01/1'));
console.log(isValidDate('2022-01-01'));
console.log(isValidDate('2022/01/32'));
console.log(isValidDate('2022/02/29'));
console.log(isValidDate('2024/02/29'));
console.log(isValidDate('20221301'));