/*
console.log('[Start]');
foo(); // foo is not defined
// 에러로 강제종료되어 아래코드는 실행 되지 않는다.
console.log('[End');
*/

// try catch 문 사용시 에러가 발생해도 코드 진행 가능
console.log('[Start]');
try{
    foo();
}catch (error){
    console.error(['에러 발생'], error);
}
console.log('[End]');