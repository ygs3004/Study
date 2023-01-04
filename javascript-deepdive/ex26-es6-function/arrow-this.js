// ex26-28
class Prefixer{
    constructor(prefix) {
        this.prefix = prefix;
    }

    // this 를 that 으로 회피시켜사용 가능 
    // const that = this; 

    add(arr){
        // return arr.map(function (item) {
            // console.log(this, 'this'); 일반 함수로 호출되는 콜백함수의 this 는 전역객체이다.
            // 클래스 내부의 모든 코드에는 strict mode가 암묵적으로 적용된다.
            // strict mode에서 일반 함수로 호출되는 모든 함수 내부의 this는 undefined
            // return this.prefix +' ' + item; // TypeError: Cannot read property 'prefix' of undefined

            // return that.prefix + ' ' + item;      that 으로 회피하여 참조
        // }, this); this를 map 함수의 두번째 인자로 전달 하는 방법도 있음
        // }.bind(this)); this를 bind 해서 전달 가능
        
        // 화살표 함수 사용시 문제 해결, lejxical this(상위의 this를 그대로 참조)
        return arr.map( item => this.prefix+item);
    }
}

const prefixer = new Prefixer('-webkit');
console.log(prefixer.add(['transition', 'user-select']));

const normal = function () {
    return this.x;
};
const arrow = () => this.x;
console.log(normal.call({x:10}));
console.log(arrow.call({x:10})); // this를 갖지 않기때문에 this가 교체가 되지 않는다.

const add = (a, b) => a+b;
console.log(add.call(null, 1,2)); // 호출 자체는 가능

let person = {
    name: 'Yoon',
    sayHi: () => console.log(`Hi ${this.name}`), // 상위 스코프의 this를 참조 => 전역객체를 참조
};

person.sayHi(); // Hi undefined

function Person(name){
    this.name = name;
}
Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);
person = new Person('Yoon');

person.sayHi(); // // Hi undefined

// 메서드를 정의할때는 ES6 메서드 축약 표현이 좋다.
person = {
    name: 'Yoon',
    sayHi(){
        console.log(`Hi ${this.name}`);
    }
};

person.sayHi(); // Hi Yoon

