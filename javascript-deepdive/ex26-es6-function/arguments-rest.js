// arguments 는 유사배열,
// 배열 메서드 사용시 객체 변환 필요

function sum(){
    var array = Array.prototype.slice.call(arguments);

    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2, 3, 4, 5));

sum = function(...args){
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// 화살표 함수는 arguments를 상위에서 참조하므로 갖고 있지 않는다. 반드시 Rest 파라미터를 사용
