// 입력받은 번호
const tel = '010-1234-567팔';

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의
let regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel)); // false

const target = 'Is this all there is?';

// 패턴 : is
// 플래그 : i => 대소문자를 구별하지 않고 검색한다.
regExp = /is/i;

// test 메서드는 target 문자열에 대해 정규 표현식 regExp의 패턴을 검색하여 매칭결과를 불리언값으로 반환
console.log(regExp.test(target)); // true

/*
* pattern: 정규 표현식의 패턴
* flags: 정규표현식의 플래그(g, i, m, u, y)
*
* new RegExp(pattern[, flags]
* */

const count = (str, char) => (str.match(new RegExp(char, 'gi'))??[]).length;

console.log(count(target, 'is')); // 3
console.log(count(target, 'xx')); // 0

// RegExp.prototype.exec
console.log(regExp.exec(target));
// [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]
// 매칭 결과 없을시 null

// RegExp.prototype.test
console.log(regExp.exec(target));
// true, false 반환


// 플래그
// i (Ignore case): 대소문자를 구별하지 않고 패턴검색
// g (Global): 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
// m (Multi line): 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.