const person = {
    name: 'Yoon',
    address: {
        city: 'Seoul'
    }
}

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결
console.log(Object.isFrozen(person)); // true
// 중첩객체는 동결 안됌
console.log(Object.isFrozen(person.address)); // true

person.address.city = 'Busan';
console.log(person); // { name: 'Lee', address: { city: 'Busan' } }

// 불변객체 구현
// 모든 프로퍼티에 대해 재귀적으로 freeze 호출
function deepFreeze(target){
    // 객체가 아니거나 동결된 객체는 무시하고 동결되지 않은 객체만 동결
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }

    return target;
}
const person2 = {
    name: 'Yoon',
    address: {
        city: 'Seoul'
    }
}
// 깊은 객체 동결
deepFreeze(person2);

console.log(Object.isFrozen(person2)); // true
console.log(Object.isFrozen(person2.address)); // true

person.address.city = 'Busan';
console.log(person2);