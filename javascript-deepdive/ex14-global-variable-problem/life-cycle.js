// 지역 변수의 생명주기는 함수의 생명주기와 같다
function foo(){
    var x = 'local';
    console.log(x); // local
    return x;
}

foo();
//console.log(x); // ReferenceError: x is not defined

var x = 'global'
foo = function(){
    console.log(x); // ? => undefined 지역변수 var x 호이스팅
    var x = 'local';
}

foo() ;
console.log(x); // global
