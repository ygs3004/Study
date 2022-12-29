var var1 = 1;

if(true){
    var var2 = 2; // 코드 블록 내에서 선언한 변수
    if(true){
        var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo(){
    var var4 = 4; // 함수 내에서 선언한 변수

    function bar(){
        var var5 = 5; // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1) // 1
console.log(var2) // 2
console.log(var3) // 3
// console.log(var4) // ReferenceError: var4 is not defined
// console.log(var5) // ReferenceError: var5 is not defined

// quiz
var x = 'global';

function foo(){
    var x = 'local';
    console.log(x); // ? => local
}

foo();

console.log(x); // ? => global

foo = function(){
    var x = 1;
    console.log(x)
    // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는것처럼 동작
    var x = 2;
    console.log(x);
}
foo(); // 2

bar = function(){
    let x = 1;
    // let x = 2; // SyntaxError: Identifier 'x' has already been declared
    console.log(x);
}
bar();