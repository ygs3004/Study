function multiply(x, y){
    console.log(arguments);
    return x*y;
}

console.log(multiply()) // NaN
console.log(multiply(1)) // NaN
console.log(multiply(1,2)) // 2
console.log(multiply(1,2,3)) // 2

// arguments 는 유사배열 객체
// 유사배열객체? : legnth 프로퍼티를 가진 객체로 for문을 순회할 수 있는 객체
function sum(){
    let res = 0;

    for(let i =0; i<arguments.length; i++){
        res += arguments[i];
    }

    return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// 유사 배열 객체의 배열 함수 사용방법
sum = function() {
    // arguments 객체를 배열로 변환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function(pre, cur){
        return pre + cur;
    }, 0)
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

// ES6 Rest parameter
sum = function(...args){
    return args.reduce((pre, cur) => pre + cur, 0);
};

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15