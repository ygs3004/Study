// apply, call, bind -> Function.prototype의 메서드 : 모든 함수가 사용 가능
// this로 사용할 객체를 첫번째 파라미터로 입력

function getThisBinding(){
    console.log(arguments);
    return this;
}

// this
const thisArg = {a:1};

console.log(getThisBinding()); // globalThis

// apply =>  호출할 함수의 인수를 배열로 묶어 전달
console.log(getThisBinding.apply(thisArg, [1, 2, 3])); // { a:1}
// call => 호출할 함수의 인수를 쉼표로 구분하여 전달
console.log(getThisBinding.call(thisArg, 1, 2, 3)); // { a:1}

// apply, call을 이용한 유사 배열객체 -> 배열로의 변환
function convertArgsToArray(){
    console.log(arguments);

    const arr = Array.prototype.slice.call(arguments);
    // const arr = Array.prototype.slice.apply.(arguments);

    console.log(arr);

    return arr;
}

convertArgsToArray(1, 2, 3);

// bind
getThisBinding = function(){
    return this;
}

console.log(getThisBinding.bind(thisArg)); // [Function: bound getThisBinding]
console.log(getThisBinding.bind(thisArg)()); // bind 메서드는 함수를 호출하지 않으므로 명시적 호출이 필요


const newMethod = getThisBinding.bind(thisArg);
console.log(newMethod());

let person = {
    name: 'Yoon',
    foo(callback){
        setTimeout(callback, 100);
    }
}

person.foo(function(){
    console.log(`Hi! my name is ${this.name}`); // this.name => undefined
    // callback 함수가 일반 함수로 호출로 인식되어 this가 전역객체 globalThis를 가리킴
})

// 바인드를 이용하여 해결
person = {
    name: 'Yoon',
    foo(callback){
        // bind 메서드로 this 바인딩을 전달
        setTimeout(callback.bind(this), 100);
    }
}

person.foo(function(){
    console.log(`Hi my name is ${this.name}`); // this.name => Yoon
});
