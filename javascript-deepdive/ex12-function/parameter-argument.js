// 함수 선언
function add(x, y){
    console.log((arguments))
    return x+y;
}

// 함수 호출
// 인수 1과 2가 매개변수 x, y에 순서대로 할당
let result = add(1, 2);

// 인수가 할당되지 않은 매개변수는 undefined
// 인수가 부족해도 에러가 발생하지 않음
console.log((add(2))); // NaN

// 인수가 더 많은 경우 초과된 인수는 무시
// 값은 사용되지 않지만 보관은 됨 [Arguments] { '0': 2, '1': 5, '2': 10 }
console.log(add(2, 5, 10)); // 7
