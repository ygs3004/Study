// 에러의 전파는 콜 스택 아래방향(실행 중인 실행 컨텍스트가 푸시되기 직전에 푸시된 실행 컨텍스트)으로 됨
const foo = () => {
    throw Error('foo에서 에러 발생');
};

const bar = () => {
    foo();
};

const baz = () => {
    bar();
};

try{
    baz();
}catch (err){
    console.error(err);
}

console.log("end");
// foo -> bar -> baz -> 전역 컨텍스트로 에러 순서 전파
// foo 보다 콜스택에서 하부 콜스택에 있는 baz에서 캐치하여 에러를 처리할 수 있다.
// 비동기 함수의 경우 태스크 큐에 저장되었다가 콜스택 최하단으로 이동하여 실행됨
// 비동기 함수는 최하단에서 실행되므로 에러전파가 불가능(catch 안됨)