// await 키워드는 언제나 async 함수 내부에서 사용
// async 함수는 언제나 프로미스 반환
// 명시적으로 프로미스를 반환하지 않더라도 함묵적으로 반환값을 resolve 하는 프로미스를 반환

// async 함수 선언문
async function foo(n) {return n;}
foo(1).then(v => console.log(v));

// async 함수 표현식
const bar = async function(n){return n;};
bar(2).then(v => console.log(v)); // 2

// async 화살표 함수
const baz = async n => n;
baz(3).then(v => console.log(v)); // 3

// async 메서드
const obj = {
    async foo(n) { return n; }
};
obj.foo(4).then(v => console.log(v)); // 4

// async 클래스 메서드
class MyClass {
    async bar(n) { return n; }
}

const myClass = new MyClass();
myClass.bar(5).then(v => console.log(v)); // 5

// async 함수는 class 의 constructor 메서드가 될 수 없다. 언제나 Promise를 반환하며, 인스턴스를 반환할 수 없다.
