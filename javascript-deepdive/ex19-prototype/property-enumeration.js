let person = {
    name: 'Yoon',
    address: 'Seoul'
};

// for ... in 문의 변수 prop에 키가 할당됨
for(const key in person){
    console.log(`${key}: ${person[key]}`)
}

console.log('toString' in person); // true
// toString 메서드는 열거할수 없도록 정의되어 있으므로 열거되지 않는다. [[Enumerable]]값이 false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));

person = {
    name: 'Yoon',
    addreses: 'Seoul',
    __proto__ : {
        age: 20
    }
};

for(const key in person){
    console.log(`${key}: ${person[key]}`)
}

// 상속받지 않은경우만 열거할 경우
for(const key in person){
    if(!person.hasOwnProperty(key)) continue;
    console.log(`${key}: ${person[key]}`)
}



// 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다 , sym -> enumerable:true 함
const sym = Symbol();
let obj = {
    a:  1,
    [sym]: 10
};
console.log(Object.getOwnPropertyDescriptor(obj, sym));
for(const key in obj){
    console.log(`${key}: ${obj[key]}`)
}

// for...in 문은 순서를 보장하지 않음, 대부분의 부라우저는 프로퍼티키에 대해 정렬을 실실하긴 함
obj = {
    2:2,
    3:3,
    1:1,
    b:'b',
    a:'a'
}

for(const key in obj){
    if(!obj.hasOwnProperty(key)) continue;
    console.log(`${key}: ${obj[key]}`)
}
/*
a: 1
1: 1
2: 2
3: 3
b: b
a: a
*/

const arr = [1, 2, 3];
arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질 수 있음
console.log(arr);
for(const i in arr){
    console.log(i);
}
console.log(arr.length, 'length');
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// forEach 메서드는 요소가 아닌 프로퍼티는 제외,
arr.forEach(v => console.log(v)); // 1 2 3

// for...of는 변수 선언문에서 키가 아닌 값을 할당
for(const value of arr){
    console.log(value); // 1 2 3
}

person = {
    name: 'Yoon',
    addreses: 'Seoul',
    __proto__ : {
        age: 20
    }
};
// Object.keys , Object.values => 열거 가능한 프로퍼티를 배열로 반환
console.log(Object.keys(person));
console.log(Object.values(person));

// Object.entries() 열거 가능한 키, 값 쌍의 배열을 배열로 반환
console.log(Object.entries(person));
Object.entries(person).forEach(([key, value]) => console.log(key, value));