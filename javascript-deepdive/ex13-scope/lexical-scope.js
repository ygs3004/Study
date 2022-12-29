// 렉시컬 스코프 : 함수의 호출 위치가 아니라 정의 위치에 따라 상위 스코프를 정한다, 동적스코프랑 반대 개념

var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo(); // ? => 10
bar(); // ? => 10