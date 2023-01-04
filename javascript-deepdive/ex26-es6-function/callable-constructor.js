var foo = function(){
    return 1;
};

// 일반적 호출
console.log(foo()); // 1

// 생성자 호출
console.log(new foo()); // foo{}

// 메서드 호출
var obj = {foo:foo};
console.log(obj.foo()); // 1

// es6 이전의 모든 함수는 callable, constructor
foo = function (){};
console.log(foo()); // undefined
console.log(new foo()); // foo{}

// callable and constructor
obj = {
    x:10,
    f:function(){return this.x;}
}

// 프로퍼티 f에 바인딩 된 함수를 메서드로서 호출
console.log(obj.f()); //10

// 프로퍼티 f에 바인딩 된 함수를 일반 함수로서로서 호출
var bar = obj.f;
console.log(bar()); // undefined

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj.f()); // f{}