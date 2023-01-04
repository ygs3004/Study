const multiply = (x, y) => x*y;
console.log(multiply(2, 3)); // 6

// 즉시 실행함수로 사용할 수 있다.
const person = (name => ({
    sayHi(){
        return `Hi My nam ie ${name}`;}
}))('lee');
console.log(person.sayHi());