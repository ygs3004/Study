function outer(){
    let x = 1;
    
    // 중첩함수
    function inner(){
        let y = 2;
        // 외부 함수의 변수를 참조 가능
        console.log((x+y))
    }

    inner();
}

outer();