// parseFloat

// 문자열을 실수로 반환
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('10.0')); // 10

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
console.log(parseFloat('34 45 66')); // 34
console.log(parseFloat('40 years')); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환
console.log(parseFloat('He was 40')); // NaN

// 앞뒤 공백 무시
console.log(parseFloat(' 60 ')); // 60


// parseInt

// 문자열을 정수로 해석하여 반환
console.log(parseInt('10'));
console.log(parseInt('10.123'));

// 문자열이 아니면 문자열로 변환한 다음 다시 정수로 해석
console.log(parseInt(10));
console.log(parseInt(10.123));

// 두번째 인수로 진법을 전달가능, 반환은 10진수
console.log(parseInt('10',2)); // 2진법 10을 10진수로 반환 -> 2
console.log(parseInt('10',8)); // 8진법 10을 10진수로 반환 -> 8
console.log(parseInt('10',16)); // 16진법 10을 10진수로 반환 -> 16

// 16진수 리터럴 '0xf'를 16진수로 해석하고 10진수로 그 결과 반환
console.log(parseInt('0xf'));
console.log(parseInt('f', 16)); //  위와 같은 결과

// 2진수 리터럴과 8진수 리터럴은 해석 안됨, 0이후 무시
console.log(parseInt('0b10')); // 0
console.log(parseInt('0o10')); // 0

// 전달받은 문자가 해당 지수로 변환 불가시 NaN
console.log(parseInt('A0')); // NaN
console.log(parseInt('20', 2)); // NaN

// 전달받은 진수를 나타내는 문자 이후 부터 무시
console.log(parseInt('1A0')); // 1
console.log(parseInt('FG', 16)); // 15


// Number.prototype.toString();
// 10진수 숫자를 해당 진수 문자열로 변경 가능
const x = 15;
console.log(x.toString(2)); // 2진수로 변경
console.log(x.toString(2), 2); // 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환

console.log(x.toString(16)); // f
console.log(parseInt(x.toString(16), 16)); // 문자열 'f을' 16진수로 해석하여 10진수 정수로 반환


