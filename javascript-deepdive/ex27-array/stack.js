const Stack = (function () {
    function Stack(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }

    Stack.prototype = {
        constructor: Stack,
        push(value) {
            return this.array.push(value);
        },
        pop() {
            return this.array.pop();
        },
        entries() {
            return [...this.array];
        }
    };

    return Stack;

}());

let stack = new Stack([1, 2]);

console.log(stack.entries()); // [1, 2]

stack.push(3);
console.log(stack.entries()); // [1, 2, 3]

stack.pop();
console.log(stack.entries()); // [1, 2]

// 클래스로 구현
class ClassStack {
    #array // private class member

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.#array = array;
    }

    push(value) {
        return this.#array.push(value);
    }
    pop() {
        return this.#array.pop();
    }
    entries() {
        return [...this.#array];
    }
}

stack = new ClassStack([1, 2]);

console.log(stack.entries()); // [1, 2]

stack.push(3);
console.log(stack.entries()); // [1, 2, 3]

stack.pop();
console.log(stack.entries()); // [1, 2]