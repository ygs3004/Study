// .mjs -> esm 임을 명시
// export => 공개하여 다른 모듈에서 사용 가능하게 함

// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x){
    return x*x;
}

// 클래스의 공개
export class Person {
    constructor(name) {
        this.name = name;
    }
}

// 하나의 객체로 한번에 공개 가능
// export {pi, square, Person};
