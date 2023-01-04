// 인수가 전달되지 않은 매개변수의 값은 undefined
// 문제가 발생 가능
function sum(x, y) {
    return x + y;
}

console.log(sum(1)); // NaN

// 수정
sum = function (x, y) {
    x = x || 0;
    y = y || 0;

    return x + y;
};
console.log(sum(1,2)); // 3
console.log(sum(1)); // 1

// ES6
sum = function (x = 0, y = 0) {
    return x + y;
};

console.log(sum(1,2)); // 3
console.log(sum(1)); // 1

// 매개변수의 기본값은 전달하지 않은경우와, undefined 일 경우만 유효
console.log(sum(undefined,undefined)); // 0
console.log(sum(null, null)); // 0
console.log(sum(null, NaN)); // NaN

function logName(name = 'Yoon') {
    console.log(name);
}

logName(); // Yoon
logName(undefined); // Yoon
logName(null); // null

//Rest 파라미터에는 값 지정 불가

// 함수 객체의 length 프로퍼티와 arguments 객체에 영향을 주지 않음
sum = function (x, y = 0) {
    console.log(arguments);
}

console.log(sum.length); // 1
sum(1); // [Arguments] { '0': 1 }
sum(1, 2); // [Arguments] { '0': 1, '1': 2 }
