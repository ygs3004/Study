// 순수 함수 : 같은 인수가 전달 되었을때 언제나 동일한 값을 반환, 부수 효과가 없음
let count = 0; // 현재 카운트

// 순수 함수 increase 는 동일한 인수가 전달되면 언제나 동일한 값을 반환
function increase(n){
    return ++n;
}

// 순수 함수가 반환한 결과같을 변수에 재할당해서 상태 변경, 인수가 달라진 경우
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2


// 비순수 함수 : 외부상태에 의존, 외부상태를 변경하는 함수
count = 0;
increase = function(){
    return ++count; // 외부상태에 의존, 외부상태를 변경
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2