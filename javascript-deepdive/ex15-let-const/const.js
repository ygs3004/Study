// 선언과 동시에 초기화 const foo; // SyntaxError: Missing initializer in const declaration

const foo=1;

{
    // 호이스팅이 발생하지 않는 것처럼 작동
    // console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    const foo2 = 1;
    console.log(foo2);
}

// 블록레벨 스코프를 갖는다
// console.log(foo2); // ReferenceError: foo2 is not defined

// 재할당이 금지된다
// foo = 2;// TypeError: Assignment to constant variable.

// 재할당을 금지할 뿐 "불변"을 의미하지 않는다.
const person = {
    name: 'Yoon'
};
// 객체는 변경 가능한 값이므로 재할당 없이 변경 가능
person.name = 'GunSoo';

console.log(person);
