const person = {
    name: 'Yoon'
}

console.log(Object.isFrozen(person)); // false
Object.freeze(person); // 프로퍼티 추가, 삭제, 재정의, 쓰기 금지
console.log(Object.isFrozen(person)); // true

console.log(Object.getOwnPropertyDescriptors(person)); // writable, configurable: false

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person) // {name:'Yoon'}

// 프로퍼티 삭제가 금지된다.
delete person.name;  // 무시. strict mode에서는 에러
console.log(person) // {name:'Yoon'}

// 프로퍼티 갱신은 금지된다
person.name = 'GunSoo'; // 무시. strict mode에서는 에러
console.log(person) // {name:'Yoon'}

// 프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person, 'name', {configurable: true});
// TypeError: Cannot redefine property: name