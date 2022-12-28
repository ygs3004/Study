// break 는 레이블문, 반복문, switch 문의 코드 블록을 탈출, 모든 문의 코드 블럭을 탈출하는 것은 아니다

// label(레이블문)

foo : {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!');


// 식별자가 붙은 레이블 for 문 탈출
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if(i+j === 3) break outer;
        console.log(`inner [${i}, ${j}]`)
    }
}

console.log('Done2!');