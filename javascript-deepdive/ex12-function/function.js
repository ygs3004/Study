// 함수 정의하기
function add(x, y){
    return x+y;
}

// 함수 호출
let result = add(2, 5);
console.log(result);

// 변수에 함수 리터럴 할당
let f =  function add2(x, y){
    return x+y;
}

// 함수는 객체
// 일반 객체는 호출할 수 없지만 함수는 호출 가능