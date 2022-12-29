// 런타임 이전에 선언단계가 실행된다. 아직 변수가 초기화 되지 않았다.
// 초기화 이전 일시적 사각지대(TDZ : Temporal Dead Zone) 에서는 변수 참조 불가
// console.log(foo); // ReferenceError: Cannot access 'foo' before initialization

let foo; // 변수 선언문에서 초기화 단계 실행
console.log(foo); // undefined

foo = 1; // 할당문에서 할당
console.log(foo); // 1

// let 또한 호이스팅이 발생, 발생하지 않는것처럼 보일뿐
let fool = 1;

{
    // 지역변수를 참조하고있으므로, 전역변수를 참조하지 않음
    // 지역레벨의 선언단계에서 fool 을 참조하므로, 초기화 되지 않아 에러 발생
    console.log(fool); // ReferenceError: Cannot access 'foo' before initialization
    let fool = 2;
}