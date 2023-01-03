let num = 0;
let increase = function (){
    return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

// => num 변수의 값의 유지가 불확실함(num 값을 increase 만 조작 가능해야함)


increase = function(){
    let num = 0;
    return ++num;
}

// => num 이 0으로 초기화 됨 => 상태를 유지 못함

// 클로저를 사용하여 관리 가능
increase = (function(){
    let num = 0;

    // 클로저
    return function(){
        return ++num;
    };
}());

console.log(increase());
console.log(increase());
console.log(increase());

let counter = (function(){

    let num = 0;

    // 클로저인 메서드를 갖는 객체를 반환.
    // 객체 리터럴은 스코프를 만들지 않는다.
    // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
    return {
        // num: 0, // 프로퍼티는 public 하므로 은닉되지 않는다.
        increase(){
            return ++num;
        },
        decrease(){
            return num > 0 ? -- num : 0;
        }
    };
}());

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
console.log(counter.decrease()); // 0

// 생성자 함수를 이용
const Counter = (function(){
    let num = 0;
    function Counter(){

    }

    Counter.prototype.increase = function(){
        return ++num;
    };

    Counter.prototype.decrease = function(){
        return --num;
    };

    return Counter;

}());

counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0

// 클로저 예제
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// counter를 기억하는 클로저 반환
function makeCounter(aux){
    let counter = 0;

    // 클로저 반환
    return function() {
        // 인수로 전달받은 보조함수에 상태 변경을 위임
        counter = aux(counter);
        return counter;
    };

}

// 보조함수
increase = function (n){
    return ++n;
}

let decrease = function decrease(n) {
    return --n;
}

// 함수로 함수를 생성
// makeCounter 함수는 보조함수를 인수로 전달받아 함수를 반환
const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2


counter = (function (){
    let counter = 0;

    // 클로저 반환
    return function(aux) {
        // 인수로 전달받은 보조함수에 상태 변경을 위임
        counter = aux(counter);
        return counter;
    };

}());
// 자유변수 공유
console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));
console.log(counter(decrease));