function* genFunc(){
    yield 1;
    yield 2;
    yield 3;
}

const generator = genFunc();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined done: true }

function* genFuncExample() {
    // 첫 next 메서드에서 yield 표현식까지 실행되고 중지
    // yield 1값은 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티
    // x 변수는 첫 호출시 아무 의미 없다.
    // 두번재 next 호출시 인자 값이 x에 할당
    const x = yield 1;

    // 두번째 넥스트 호출시 인자가 x에 할당, y는 의미없음
    // yield 값은 두번째 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티
    // 세번째 next 호출시 인자 값이 y에 할당
    const y = yield (x + 10);

    // value 프로퍼티에 할당, 반환값은 의미가 없다.
    return x+y;
}

const generatorExample = genFuncExample();
let res = generatorExample.next();
console.log(res); // { value: 1, done: false }

res = generatorExample.next(10);
console.log(res); // { value: 20, done: false }

res = generatorExample.next(20);
console.log(res); // { value: 30, done: true }
