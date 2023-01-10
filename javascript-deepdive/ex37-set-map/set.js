// 중복되지 않은 유일한 값들의 집합

// Set 객체 생성
// 이터러블을 인수로 전달받아 생성, 중복된 값은 저장되지 않음
{
    const set = new Set();
    console.log(set); // Set(0) {}

    const set1 = new Set([1, 2, 3, 3]);
    console.log(set1); // Set(3) { 1, 2, 3 }

    const set2 = new Set('Hello');
    console.log(set2); // Set(4) { 'H', 'e', 'l', 'o' }
}

// 배열의 중복 요소 제거
let uniq = array => array.filter((v, i, self) => self.indexOf(v) === i );
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); [2, 1, 3, 4]

// Set 을 이용한 중복 제거
uniq = array => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4])) // [2, 1, 3, 4]

// 요소 개수 확인
{
    const { size } = new Set([1, 2, 3, 3]);
    console.log(size); // 3
}

// size 프로퍼티는 setter 없이 getter 만 존재
// size 에 숫자를 할당하여 요소 개수를 변경할 수 없다.
{
    const set = new Set([1, 2, 3]);

    console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));
    /*
        {
          get: [Function: get size],
          set: undefined,
          enumerable: false,
          configurable: true
        }
    */

    set.size = 10; // 무시됨
    console.log(set.size);
}

// 요소 추가
console.log('====================================')
{
 const set = new Set();
    console.log(set);
    // add 메서드는 요소 추가 후 set 객체 반환
    set.add(1); // Set(0) {}
    console.log(set); // Set(1) { 1 }
}
// 중복된 요소 추가는 무시
{
    const set = new Set();

    set.add(1).add(2).add(2);
    console.log(set); // Set(2) { 1, 2 }
}
// === 비교 연산자는 NaN과 NaN을 다르다고 평가, 
// Set은 같다고 평가하여 중복 추가를 허용하지 않음
{
    const set = new Set();

    console.log(NaN === NaN); // false
    console.log(0 === -0); // true

    // NaN 과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
    set.add(NaN).add(NaN);
    console.log(set); // Set(1) { NaN }
    // +0과 -0을 같다고 평가하여 중복추가를 허용하지 않는다.
    set.add(0).add(-0);
    console.log(set); // Set(2) { NaN, 0 }
}

// 요소 존재여부 확인
{
    const set = new Set([1, 2, 3]);

    console.log(set.has(2)); // true
    console.log(set.has(4)); // false
}

console.log('================== 요소 삭제 ==================')
// 요소 삭제
// Set.prototype.delete : 삭제 성공 여부를 불리언으로 반환
{
    const set = new Set([1, 2, 3]);

    set.delete(2);
    console.log(set); // Set(2) { 1, 3 }

    // 요소 1을 삭제
    console.log(set.delete(1)); // true
    console.log(set); // Set(1) { 3 }

    // 존재하지 않는 객체 삭제시 에러 없이 무시
    set.delete(4);
    console.log(set); // Set(1) { 3 }

    // delete는 불리언 값을 반환
    // set.delete(1).delete(2) TypeError: set.delete(...).delete is not a function
}

// 요소 일괄 삭제
// Set.prototype.clear
{
    const set = new Set([1, 2, 3]);

    set.clear();
    console.log(set); // Set(0) {}
}

// 요소 순회
// Set.prototype.forEach
// forEach 사용 (현재 요소값, 현재 요소값, this) 인수 전달
// Array.prototype.forEach와 인수를 맞추기 위해 현재 요소값을 두번 전달
{
    const set = new Set([1, 2, 3]);

    set.forEach((v, v2, set) => console.log(v, v2, set));
    /*
        1 1 Set(3) { 1, 2, 3 }
        2 2 Set(3) { 1, 2, 3 }
        3 3 Set(3) { 1, 2, 3 }
    */
}
// Set 객체는 이터러블 => for of 순회 가능
{
    const set = new Set([1, 2, 3]);

    console.log(Symbol.iterator in set); // true

    for (const value of set) {
        console.log(value); // 1 2 3
    }

    // 이터러블이므로 스프레드 문법 사용 가능
    console.log([...set]); // [1, 2, 3]
    // 이터러블이므로 배열 디스트럭처링 할당 가능
    const [a, ...rest] = set;
    console.log(a, rest); // 1, [2, 3]
    
    // 요소의 순서는 의미가 없지만 순회할시 추가된 순서대로 따름, 다른 이터러블과의 호환성 유지를 위함
}
