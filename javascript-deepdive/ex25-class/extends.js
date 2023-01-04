class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    eat() {return 'eat;';}
    move() {return 'move';}

}

class Bird extends Animal{
    fly(){
        return 'fly';
    }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird { age: 1, weight: 5 }
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly


// 생성자 함수를 받아 상속 가능
function Base(a){
    this.a = a;
}

class Derived extends Base{};
const derived = new Derived(1);
console.log(derived);
