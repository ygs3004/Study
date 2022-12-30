const myProto = {x:10}

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
    y: 20,
    // 객체를 직접 상속받는다.
    // obj -> myProto -> Object.prototype -> null
    __proto__: myProto
};
/*
위 코드와 동일
const obj = Object.create(myProto, {
    y: {value: 20, writable: true, enumerable: true, configurable: true}
});
*/

console.log(obj.x, obj.y); // 10, 20
console.log(Object.getPrototypeOf(obj) === myProto) // true