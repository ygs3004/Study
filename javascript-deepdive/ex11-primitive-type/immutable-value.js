// const 원시 값은 재할당이 금지
const o = {};

// rorcpsms rksmd
o.a = 1;
console.log(o);

let str = 'string';
// 문자열은 원시값이므로 변경할 수 없다. 에러가 발생하지 않는다.
str[0] = 'S';
console.log(str);

// 값에 의한 전달
let score = 80;
let copy = score;
console.log(score);
console.log(copy);

score = 100;
console.log(score); // 100
console.log(copy); // ? -> 80! 
// 다른 두 변수에 저장된 원시 값은 별개의 값이 되어 한쪽에서 재할당 되더라도 간섭되지 않음