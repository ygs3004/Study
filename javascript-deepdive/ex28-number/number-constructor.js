let numObj = new Number(10);
console.log(numObj); // [Number: 10]  => [[PrimitiveValue]]: 10

// 숫자로 자동 변환
numObj = new Number('10');
console.log(numObj);  // [Number: 10]  => [[PrimitiveValue]]: 10

numObj = new Number('Hello');
console.log(numObj);  // [Number: NaN]  => [[PrimitiveValue]]: NaN

// new 연산자를 사용하지 않고 호출시 인스턴스가 아니라 숫자를 반환
// 명시적 타입 변환 가능
// 문자열 => 숫자
console.log(Number('0')); // 0
console.log(Number('-1')); // -1
console.log(Number('10.53')); // 10.53

// 불리언 타입 => 숫자 타입
console.log(Number(true)); // 1
console.log(Number(false)); // 0
