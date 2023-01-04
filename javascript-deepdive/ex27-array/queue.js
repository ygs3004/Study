let Queue = (function () {
    function Queue(array = []){
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }

    Queue.prototype = {
        constructor: Queue,

        // 큐의 가장 마지막에 데이터를 밀어 넣는다.
        enqueue(value) {
            return this.array.push(value);
        },

        // 큐의 가장 처음데이터, 즉 가장 먼저 밀어넣은 데이터를 꺼낸다.
        dequeue() {
            return this.array.shift();
        },

        // 큐의 복사본 배열을 반환한다.
        entries() {
            return [...this.array];
        }
    };

    return Queue
}());

let queue = new Queue([1, 2]);
console.log(queue.entries()); // [1, 2]

queue.enqueue(3);
console.log(queue.entries()); // [1, 2, 3]

queue.dequeue();
console.log(queue.entries()); // [2, 3]

class ClassQueue{
    #array; // private

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.#array = array;
    }

    // 큐의 가장 마지막에 데이터를 밀어 넣는다.
    enqueue(value) {
        return this.#array.push(value);
    }

    // 큐의 가장 처음데이터, 즉 가장 먼저 밀어넣은 데이터를 꺼낸다.
    dequeue() {
        return this.#array.shift();
    }

    // 큐의 복사본 배열을 반환한다.
    entries() {
        return [...this.#array];
    }

}

classQueue = new ClassQueue([1, 2]);
console.log(classQueue.entries()); // [1, 2]

classQueue.enqueue(3);
console.log(classQueue.entries()); // [1, 2, 3]

classQueue.dequeue();
console.log(classQueue.entries()); // [2, 3]