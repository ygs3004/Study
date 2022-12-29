// 함수 선언문
function add(x, y){
    return x+y;
}

// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력
// 단, Node.js 환경에서는 console.log와 같음
console.dir(add);

// 함수 호출
console.log(add(2, 5));

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석
function foo(){ // let foo = function foo(){} 와 같은 의미, 자동적으로 식별자가 지정됨
    console.log('foo');
}

foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아닌 함수 리터럴 표현식으로 해석
// 함수 리터럴에서는 함수 이름을 생략할 수 있다
(
    function bar() {
        console.log('bar');
    }
);

bar(); // bar is not defined
