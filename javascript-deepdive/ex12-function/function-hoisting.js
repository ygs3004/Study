// 함수 참조
console.dir(add); // [Function: add]
console.log(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y){
    return x+y;
}

// 함수 표현식, 무기명 함수
var sub = function (x, y){
    return x-y;
}

// 함수 선언문의 경우 런타임 이전에 정의 되지만, var로 선언한 경우 sub에 undefined로 정의되고 할당문이 실행되는 시점에 정의됨
// let으로 함수를 선언할 경우 호이스팅 문제로 참조시에 바로 에러