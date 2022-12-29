// 실제로 동작하지만 개발자가 직접 접근할수 있도록 공개되어 있지는 않은 
// 의사 프로퍼이와 메소드(pseudo property, pseudo method)가 존재

// 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖음

const o = {};
// o.[[Prototype]] // 직접 접근은 불가

o.__proto__ // Object.prototype
