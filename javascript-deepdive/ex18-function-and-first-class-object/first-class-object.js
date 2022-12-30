// 일급 객체
// 1. 무명의 리터럴로 생성 가능, 런타임시 생성이 가능
// 2. 변수, 자료구조(객체, 배열 등)에 저장가능
// 3. 함수의 매개변수로 전달 가능
// 4. 함수의 반환값으로 사용 가능

// 함수
// 리터럴로 생산 가능
// 변수에 저장 가능
const increase = function(num){
    return ++num;
};

const decrease = function(num){
    return --num;
};

// 객체에 저장 가능
const auxs = {
    increase,
    decrease
}

// 함수의 매개변수, 반환값으로 사용 가능
function makeCounter(aux){
    let num = 0;
    return function(){
        num = aux(num);
        return num;
    }
}

const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
