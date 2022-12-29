// 생성자 함수
let add = new Function('x','y','return x+y'); // new 생략 가능
console.log(add(2, 5));

let add1 = (function(){
    let a = 10;
    return function (x, y){
        return x + y + a;
    };
}());

console.log(add1(1, 2)) // 13

let add2 = (function(){
    let a = 10;
    return new Function ('x', 'y', 'return x+y+a;');
}());

console.log(add2(1, 2)); // ReferenceError: a is not defined
// 클로저를 생성하지 않음, 함수 선언문, 표현식과 다르다