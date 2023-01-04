const obj = {
    x: 1,
    // foo 는 메서드, non-constructor, 프로퍼티 없음
    foo(){
        return this.x
    },
    // bar 는 메서드가 아닌 바인딩 된 일반 함수
    bar: function () {
        return this.x;
    }
}

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

// console.log(new obj.foo()); // TypeError: obj.foo is not a constructor -> non-constructor
console.log(new obj.bar()); // bar{}

// obj.foo 는 es6 메서드 => 프로퍼티가 없다.
console.log(obj.foo.hasOwnProperty('prototype')); // false

// obj.bar 는 constructor인 일반 함수 => 프로퍼티가 있다.
console.log(obj.bar.hasOwnProperty('prototype')); // true

// 포준 빌트인 객체가 제공하는 프로토타입 메서드, 정적 메서드는 모두 non-constructor
console.log(String.prototype.toUpperCase.prototype); // undefined

const base = {
    name: 'Yoon',
    sayHi(){
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__: base,

    // sayHi => ES6 메서드, [[HomeObject]]를 갖는다.
    // sayHi => [[HomeObject]] 는 sayHi가 바인딩 된 객체인 derived를 가리키고
    // super는 sayHi의 [[HomeObject]]의 프로토 타입인 base를 가리킨다.
    sayHi(){
        console.log(this);
        return `Hi! ${super.name}. how are you doing?`;
    },

    // sayHello 는 ES6 메서드가 아님, [[HomeObject]]를 갖지 않음
    // super 사용 불가
    sayHello: function(){
        // return `${super.sayHi()}. Hello!!` SyntaxError: 'super' keyword unexpected here
    }
};

console.log(derived.sayHi()); // Hi! Yoon. how are you doing?
