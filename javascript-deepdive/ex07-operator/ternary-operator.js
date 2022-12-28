// 2 % 2 는 0이고 0은 false로 암묵적 타입 변환됨
let x = 2;
let result = x%2 ? '홀수' : '짝수';
console.log(result);

// if ...else는 값으로 사용될 수 없지만 삼항 연산자는 가능
// SyntaxError: Unexpected token 'if'
/*
    let y = 10;
    let result2 = if(x%2){
        result2 = '홀수';
    } else {
        result2 = '짝수'
    }
*/

let y = 10;
let result2 = x%2 ? '홀수' : '짝수';
console.log(result2); // 짝수
