// 외부에서 전달받은 f를 n만큼 반복 호출
// 변경되는 로직을 추상화
function repeat(n, f){
    for(let i=0; i<n; i++){
        f(i) // i를 전달하면서 f 호출
    }
}

let logAll = function (i){
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달
repeat(5, logAll); // 0 1 2 3 4

let logOddds = function (i){
    if(i%2) console.log(i);
}

// 반복 호출할 함수를 인수로 전달
repeat(5, logOddds); // 1 3


// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성
repeat(5, function(i){
    if(i%2) console.log(i);
}) // 1 3

// 콜백함수를 사용하는 map, filter, reduce
let res = [1, 2, 3].map(function (item){
    return item*2
})
console.log(res);  // [2, 4, 6]

res = [1, 2, 3].filter(function (item){
    return item%2
})
console.log(res); // [1, 3]

res = [1, 2, 3].reduce(function (acc, cur){
    return acc + cur;
}, 0)
console.log(res); // 6