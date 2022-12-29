// 객체의 얕은 복사, 깊은 복사

const o = {
    x:{
        y:1
    }
};

const c1 = {...o};
console.log(c1)
console.log(o)
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash 설치 후 node.js 환경에서 실행
const _ = require('lodash');

// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false

// 얕은 복사, 깊은 복사라고 부르는 다른 경우
// 깊은 복사_
const v = 1;
const c3 = v;
console.log(c3 === v); // true

const o2 = {
    x:1
};

// 얕은 복사_
const c4 = o2;
console.log(c4 === o2);

// 참조에 의한 전달, 공유에 의한 전달
let person = {
    name: 'Yoon'
}
let copy = person
console.log(copy === person); // true

copy.name = 'GunSoo';
person.address = 'Seoul';
// person과 copy는 다른 메모리에 저장되지만 동일한 값을 참조하므로 같은 결과가 나옴
console.log(person);
console.log(copy);


// quiz
let person1 = {
    name: 'Yoon'
};

let person2 = {
    name: 'Yoon'
};

console.log(person1 === person2); // ? => false
console.log(person1.name === person2.name); // ? => true