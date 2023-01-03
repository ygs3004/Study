// 함수를 정의한 위치에 따라 상위 스코프가 바뀜

const x = 1;
function outerFunc(){
    const x = 10;
    function innerFunc(){
        console.log(x);
    }

    innerFunc();
}

outerFunc = function(){
    const x = 10;
    innerFunc();
}

function innerFunc(){
    console.log(x);
}

outerFunc(); // 1