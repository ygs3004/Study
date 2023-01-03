// value => 전역 객체의 프로퍼티
var value = 1;
// const 키워드의 경우 전역 객체의 프로퍼티(x)
// const value = 1;

let obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this); // foo's this:  { value: 100, foo: [Function: foo] }
        console.log("foo's this.value: ", this.value); // foo's this.value:  100

        // 메서드 내에서 정의한 중첩함수
        function bar() {
            console.log("bar's this: ", this); // globalThis
            console.log("bar's this.value: ", this.value); // undefined : 책에서와 다른 값, 자바스크립트 버젼에 따른 변경으로 추정
        }

        bar();
    }
};

obj.foo();

// callback 함수의 경우
obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this); // foo's this:  { value: 100, foo: [Function: foo] }

        // callback 함수 this에는 전역 객체가 바인딩
        setTimeout(function () {
            console.log("callback's this: ", this); // foo{} : 책에서와 다른값 callback을 호출한 메서드가 바인딩
            console.log("callback.value: ", this.value); // undefined : 책에서와 다른 값, 자바스크립트 버젼에 따른 변경으로 추정
        }, 100)
    }
}

obj.foo();

// 콜뱀 함수의 this 바인딩이 메서드의 this 와 다름
// 일치 시키기 위해 this를 참조 변수 이용
obj = {
    value: 100,
    foo(){
        const that = this;
        console.log(this);
        setTimeout(function(){
            //console.log(this.value); 전역 객체값을 참조 => undefined
            console.log('that.value', that.value);
        }, 100)
    }
}

obj.foo();

// apply / call / bind 함수 이용시 this를 명시적으로 바인딩 가능
obj = {
    value: 100,
    foo(){
        setTimeout(function(){
            console.log("bind",this.value);
        }.bind(this), 101);
    }
}
obj.foo(); // 100

// 화살표 함수를 이용
obj = {
    value: 100,
    foo(){
        // 화살표 함수의 this는 상위 스코프의 this를 가리킨다.
        setTimeout(() => console.log('arrow', this.value),102);
    }
}
obj.foo(); // 100