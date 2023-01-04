// Rest 파라미터(나머지 매개변수) : 이름 앞에 ... 을 붙여서 정의한 매개변수
function foo(param, ...rest){
    console.log(param); // 1
    console.log(rest); // [2, 3, 4, 5]
}

foo(1, 2, 3, 4, 5);


// function foo(...rest, param1, param2){} => (X) 
// Rest 파라미터는 반드시 마지막이어야함
// 단 하나의 Rest 파라미터만 선언 가능

// 함수의 매개변수의 개수를 나타내는 length 프로퍼티에 영향을 주지 않음
function bar(...rest){}
function baz(x, y, ...rest){}
console.log(foo.length); // 1
console.log(bar.length); // 0
console.log(baz.length); // 2