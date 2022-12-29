const person = {
    name: 'Yoon'
};
console.log(Object.isSealed(person)) // true, 확장 가능

Object.seal(person); // 객체를 밀봉(seal) 하여 추가, 삭제, 재정의 금지

console.log(Object.isSealed(person)) // false
console.log(Object.getOwnPropertyDescriptors(person)); // configurable: false


// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person) // {name:'Yoon'}

// 프로퍼티 삭제가 금지된다.
delete person.name;  // 무시. strict mode에서는 에러
console.log(person) // {name:'Yoon'}

// 프로퍼티 갱신은 가능
person.name = 'GunSoo';
console.log(person) // {name:'GunSoo'}

// 프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person, 'name', {configurable: true});
// TypeError: Cannot redefine property: name