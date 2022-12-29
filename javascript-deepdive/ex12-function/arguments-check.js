function add(x, y){
    return x+y;
}

console.log(add(2)); // NaN
console.log(add('a','b')); // 'ab'

// 인수 확인
add = function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // 매개변수를 통해 부적절한 경우 에러 발생
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x+y;
}

// console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
// console.log(add('a','b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.

// 기본값 할당
add = function add(a, b, c){
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a+b+c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

// ES6 매개변수 기본값 할당
// 인수가 없을때, undefined 인 경우에만 유효
add = function add(a=0, b=0, c=0){
    return a+b+c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0