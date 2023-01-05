// Symbol.iterator 가 반환한 이터레이터는 next 메서드를 갖는다
const array = [1, 2, 3];
let iterator = array[Symbol.iterator]();
console.log('next' in iterator); // true

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for ... of
const iterable = [1, 2, 3];
iterator = iterable[Symbol.iterator]();

for(;;){
    const res = iterator.next();
    if(res.done) break;
    const item = res.value;
    console.log(item); // 1 2 3
}