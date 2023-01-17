// 에러 객체는 new 로 생성한다고 발생하는 것이 아니라 throw 해야 에러가 발생
const repeat = (n, f) => {
    if (typeof f !== 'function') throw new TypeError('f must be a function');
    for(let i=0; i<n; i++){f(i)};
}

// 에러가 발생해도 try/catch 문을 통해 코드 진행
try{
    repeat(2, 1); // 두번째 인자가 function 이 아니므로 TypeError
} catch (err){
    console.error(err);
}

console.log('End')