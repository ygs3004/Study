// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str){
    str = str || ''; // undefined 일경우 ''로 설정
    return str.length;
}

console.log(getStringLength());
console.log(getStringLength('hi'));

// ES6 매개변수의 기본값 설정
function getStringLengthES6(str = ''){
    return str.length;
}

console.log(getStringLengthES6());
console.log(getStringLengthES6('hi'));
