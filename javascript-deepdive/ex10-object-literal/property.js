let person = {
    // 프로퍼티 키는 name, 값은 'Yoon'
    name: 'Yoon',
    age: 20
}

person = {
    firstName: 'Gun-soo', // 식별자 네이밍 규칙을 준수하는 key
    'last-name': 'Yoon'   // 식별자 네이밍 규칙을 준수하지 않는 key, 따옴표를 이용
}

console.log(person);

let obj = {};
let key = 'hello';

// ES5 : 프로퍼티 키 동적 생성
obj[key] = 'world'
// ES6 : 계산된 프로퍼티 이름

console.log(obj);

let foo = {
    '' : '' // 빈문자열도 프로퍼티 키로 사용 가능
};
console.log(foo);

foo = {
    0:1,
    1:2,
    2:3
};
console.log(foo); // 프로퍼티 키는 내부적으로 문자열로 변환

foo = {
    var: '',
    function: ''
};
console.log(foo); // 프로퍼티 키로 예약어도 사용 가능하나 좋지는 않음

foo = {
    name: 'Yoon',
    name: 'GunSoo'
}
console.log(foo); // 키값이 같은 경우 덮어쓰며, 에러도 발생하지 않으니 주의