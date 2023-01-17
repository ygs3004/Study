// 제네레이터 함수 정의
// function* 키워드로 선언, 하나 이상의 yield 표현식을 포함

// 제네레이터 함수 선언문
function* genDecFunc() {
    yield 1;
}

// 제네레이터 함수 표현식
const getExpFunc = function* () {
    yield 1;
};

// 제네레이터 메서드
const obj = {
    *getObjMethod(){
        yield 1;
    }
};

// 제네레이터 클래스 메서드
class MyClass {
    *genClsMethod() {
        yield 1;
    }
}

// 애스터리스크(*) 를 function 키워드와 함수 이름사이에 붙이면 됨, function 뒤에 붙이는 것을 권장
function* genFunc(){yield 1;}
function * genFunc(){yield 1;}
function *genFunc(){yield 1;}
function*genFunc(){yield 1;}

// 화살표 함수로 정의할 수 없음, new 연산자와 함께 생성자 함수로 호출할 수 없음
// const getArrowFunc = *() => {yield 1;} SyntaxError: Unexpected token '*'
// new genFunc(); TypeError: genFunc is not a constructor
