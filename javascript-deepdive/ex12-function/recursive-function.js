// 평범한 반복 함수
function countdown(n) {
    for(let i=n; i>=0; i--) console.log(i);
}
countdown(3);


// 재귀 함수, 반복문 없이 구현
countdown = function countdown(n){
    if(n<0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}
countdown(3);

// 팩토리얼 함수
// 팩토리얼 : 1부터 자신까지의 모든 양의 정수의 곱
// n! = 1*2*...*(n-1)*n
let factorial = function foo(n){
    // 탈출 조건
    if(n <= 1) return 1;
    // 재귀 호출
    // return n * foo(n - 1); 함수 이름으로 호출 가능하지만 함수 내부에서만 가능

    return n * factorial(n - 1);
}

// console.log(foo(0)); 
console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2*1 = 2
console.log(factorial(3)); // 3! = 6
console.log(factorial(4)); // 4! = 24
console.log(factorial(5)); // 5! = 120