// key in object -> 프로퍼티 존재여부 확인
const person = {
    name: 'Yoon',
    address: 'Seoul'
};

console.log('name' in person); // true
console.log('address' in person); // true
console.log('age' in person); // false

// 상속받는 모든 프로퍼티를 확인하므로 주의 필요
console.log('toString' in person); // true

// Reflect.has -> in 연산자와 동일하게 작동
console.log('name' in person); // true
console.log('toString' in person); // true
console.log('age' in person); // false

// Object.prototype.hasOwnProperty
// 객체 고유 프로퍼티만 확인, 상속받은 값 false
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false
console.log(person.hasOwnProperty('toString')); // false