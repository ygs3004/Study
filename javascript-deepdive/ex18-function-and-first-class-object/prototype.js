const obj = {a:1};

// 객체 리터럴 방식으로 생성한 객체의 프로토 타입은 Object.prototype
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 생성 => Object.prototype의 프로퍼티를 상속
// hasOwnProperty 메서드는 Object.prototype의 메서드다
// hasOwnProperty : 인수로 전달받은 프로퍼티 키가 객체 고유의 프로터인 경우 true, 상속받거나 아닐시 false
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false

// 함수 prototype 프로퍼티 : constructor 만이 소유하는 프로퍼티
console.log((function(){}).hasOwnProperty('prototype')); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log({}.hasOwnProperty('prototype')); // true