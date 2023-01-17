// 제너레이터 함수를 호출하면 코드블록을 실행하는 것이 아니라 제너레이터 객체를 반환
// 제너레이터 객체는 이터러블이면서 이터레이터

// 제너레이터 함수
function* genFunc(){
    yield 1;
    yield 2;
    yield 3;
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환
const generator = genFunc();
console.log(Symbol.iterator in generator); // true
// 이터레이터는 next 메서드를 갖는다.
console.log('next' in generator); // true

// next : 함수의 yield 표현식까지 코드 블록을 실행, yield 된 값을 value, false를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체 반환
// return : 인수로 전달받은 값을 value, true를 done 프로퍼티 값으로 갖는 이터레이트 리절트 객체 반환
// throw : 인수로 전달받은 에러 발생, undefined를 value, true를 done으로 하는 이터레이트 리절트 객체 반환

{
    function* genFunc(){
        try {
            yield 1;
            yield 2;
            yield 3;
        } catch (e){
            console.error(e);
        }
    }

    const generator = genFunc();

    console.log(generator.next()); // { value: 1, done: false }
    /*
    console.log(generator.throw('Error!'));
    Error!
    { value: undefined, done: true }
    */
    console.log(generator.return('End')); // { value: 'End', done: true }
}