// 문자열 타입
// 따옴표로 감싸지 않을경우 식별자(변수)로 인식.
let string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱(ES6)
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

// 템플릿 리터럴 : 백틱을 사용해 표현
let template = `Template literal`;
console.log(template);

// 일반 문자열의 경우
template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>'
console.log(template);

// 템플릿 리터럴의 경우
template= `<ul>
        <li><a href="#">Home</a></li>
</ul>
`
console.log(template);

// 템플릿 리터럴 문자열 연결
let first = '건수';
let last = '윤';

// ES5
console.log('My name is ' + last + first);
// 템플릿 리터럴 표현식 삽입
console.log(`My name is ${last}${first}`);
