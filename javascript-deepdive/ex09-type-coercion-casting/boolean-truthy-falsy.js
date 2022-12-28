if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');
// -> 2, 4

// 아래의 조건문은 모두 실행됨
if(!false)      console.log(false + ' is falsy value');
if(!undefined)  console.log(undefined + ' is falsy value');
if(!null)       console.log(null + ' is falsy value');
if(!0)          console.log(0 + ' is falsy value');
if(!NaN)        console.log(NaN + ' is falsy value');
if(!'')         console.log('' + ' is falsy value');

// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false 반환
function isFalsy(v) {
    return console.log(!v);
}

function isTruthy(v){
    return console.log(!!v);
}

// 모두 true;
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 모두 true 반환
isTruthy(true);
isTruthy('0'); // 빈문자열이 아닌 문자열은 Truthy 한 값이다
isTruthy({});
isTruthy([]);