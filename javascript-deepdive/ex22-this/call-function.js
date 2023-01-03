// 함수 호출 방식
// 1. 일반함수 호출
// 2. 메서드 호출
// 3. 생성자 함수 호출
// 4.Function.prototype.apply/call/bind 메서드에 의한 간접 호출

const foo = function(){
    console.dir(this);
    console.log(this);
};

// 1. 일반 함수 호출
// this -> globalThis
foo(); // global

// 2. 메서드 호출
// 함수가 프로퍼티 값(메서드일 경우)
const obj = {foo};
obj.foo(); // obj

// 3. 생성자 호출
// 생성자 함수가 생성한 인스턴스
new foo(); // foo{}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정
const bar = {name: 'bar'};

foo.call(bar);   // { name: 'bar' }
foo.apply(bar); // { name: 'bar' }
foo.bind(bar)(); // { name: 'bar' }