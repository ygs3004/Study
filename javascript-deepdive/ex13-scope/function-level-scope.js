var x = 1;

if(true) {
    // var 키워드는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다
    // 함수 밖에서는 var 키워드로 선언된 변수는 코드 블록내에서 선언되었다 할지라도 모두 전역
    // x 는 전역변수고 중복 선언이 가능하다
    // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}

console.log(x); // 10

var i = 10;
for(var i=0; i<5; i++){
    console.log(i); // 0 1 2 3 4
}

// i 가 변경됨
console.log(i); // 5