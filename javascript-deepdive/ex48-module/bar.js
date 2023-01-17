// x 변수는 전역변수, foo.js 에서 선언한 변수 x와 중복 선언
var x = 'bar'
console.log(window.x);