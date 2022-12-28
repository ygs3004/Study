// 명시적 타입 변환
// 문자열 변환
// 1. String 생성자 함수를 new 연산자 없이 호출
// 숫자 => 문자
String(1);          // "1"
String(NaN);               // "NaN"
String(Infinity);          // "Infinity"
// 불리언타입 => 문자열 타입
String(true);       // true
String(false);      // false

// 2. Object.prototype.toString 메서드를 사용
// 숫자 => 문자
(1).toString();             // "1"
(NaN).toString();           // "NaN"
(Infinity).toString();      // "Infinity"
// 불리언 => 문자
(true).toString();          // "true"
(false).toString();         // "false

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 => 문자
1+'';
NaN + '';
Infinity + '';
// 불리언 => 문자
true + '';
false + '';


// 숫자 타입으로 변환
// 1. Number 생성자 함수를 new 연산자 없이 호출
// 문자 => 숫자
Number('-10.12');       // -10.12
// 불리언 => 숫자
Number(true);           // 1
Number(false);          // 0

// 2. parseInt, parseFloat 함수 사용(문자열 변환)
// 문자 => 숫자
parseInt('0');
parseInt('-1');
parseFloat('10.53') // 10.53

// 3. + 단항 산술 연산자 이용
// 문자 => 숫자
+'0';
+'-1';
+'10.53';
+true;  // 1
+false; // 0

// 4. *산순 연산자를 이용
// 문자 => 숫자
'0' * 1; // 0
'-1' * 1; // -1
'10.53' * 1 // 10.53
// 불리언 => 숫자
true * 1; // 1
false * 1; // 0

// 불리언 타입으로 변환
// 1. Boolean 생성자 함수를 new 없이 호출
Boolean(Infinity) // true
Boolean(null) // false
Boolean(undefined) // false
// 2. ! 부정논리 연산자 두번 사용
!!'false'; // true
!!NaN // false
!!{}; // true
!![]; // true