// 1. non-constructor(인스턴스 생성 X, prototype 프로퍼티가 없다

// 2. 중복된 매개변수 이름을 선언할 수 없다.
// 'use strict'; 사용시 일반 함수도 불가능
function normal(a, a){return a+a};

// const arrow = (a, a) => a + a; SyntaxError: Duplicate parameter name not allowed in this context


// 3. this. arguments, super, new.target 바인딩을 갖지 않는다.
//      => 스코프 체인상 가장 가까운 상위 함수 중 화살표 함수가 아닌 함수의 값을 참조

