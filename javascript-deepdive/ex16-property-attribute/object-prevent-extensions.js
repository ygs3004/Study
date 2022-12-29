const person = {
    name: 'Yoon'
};

console.log(Object.isExtensible(person)) // true, 확장 가능

Object.preventExtensions(person); // 확장 금지

console.log(Object.isExtensible(person)) // false

// 프로퍼티 추가가 금지된다.
person.age = 20;
console.log(person) // {name:'Yoon'}

// 삭제는 가능
delete person.name;
console.log(person); // {}

// 정의에 의한 추가도 금지
// Object.defineProperty(person, 'age', {value:20}); TypeError: Cannot define property age, object is not extensible