const person = {
    name: 'Yoon'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체(PropertyDescriptor)를 반환
// 존재하지 않거나 상속받은 프로퍼티를 요구하면 undefined 반환
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'Yoon', writable: true, enumerable: true, configurable: true }
// [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] => Property Attribute

person.age = 20;

// ES8 Object.getOwnPropertyDescriptor's'()
// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 PropertyDescriptor 반환
console.log(Object.getOwnPropertyDescriptors(person));
