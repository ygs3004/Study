// primitive 원시값, obj 객체
function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Yoon';
}

// 외부 상태
let num = 100;
let person = {name:'GunSoo'};

console.log(num); // 100
console.log(person) // { name: 'GunSoo' }

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조가 복사되어 전달
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // { name: 'Yoon' }