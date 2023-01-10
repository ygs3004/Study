// 객체와 유사하지만 차이가 있음
// Key 값 => 객체 : 문자열 또는 심벌 값 , Map : 객체를 포함한 모든 값
// 이터러블 => 객체 : x , Map : o
// 요소 개수 확인 => 객체 : Object.keys(obj).length, Map : map.size

// 객체의 생성
console.log("============== 객체의 생성 ==============")
{
    const map = new Map();
    console.log(map); // Map(0) {}
}
{
    // 키와 값의 쌍으로 이루어진 이터러블을 인수로 객체 생성
    const map1 = new Map([['key1', 'value'], ['key2', 'value2']])
    console.log(map1); // Map(2) { 'key1' => 'value', 'key2' => 'value2' }

    // const map2 = new Map([1, 2]) // TypeError: Iterator value 1 is not an entry object
}
{
    // 중복된 키를 갖는 요소는 값이 덮어 씌워짐
    const map = new Map([['key1', 'value'], ['key1', 'value2']])
    console.log(map); // Map(1) { 'key1' => 'value2' }
}

// 요소 개수 확인
console.log("============== 요소 개수 확인 ==============")
{
    const {size} = new Map([['key1', 'value'], ['key1', 'value2']]);
    console.log(size);
}
{
    // size 프로퍼티는 getter만 존재, 변경 불가
    const map = new Map([['key1', 'value'], ['key1', 'value2']]);

    console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
    /*
        {
            get: [Function: get size],
            set: undefined,
                enumerable: false,
            configurable: true
        }
    */

    map.size = 10; // 무시
    console.log(map.size); // 1
}

// 요소 추가
// Map.prototype.set
console.log("============== 요소 추가 ==============")
{
    const map = new Map();
    console.log(map); // Map(0) {}

    map.set('key1', 'value1');
    console.log(map); // Map(1) { 'key1' => 'value1' }
}
{
    // set 메서드는 요소 추가후 Map 객체 반환, 메서드 체이닝 가능
    const map = new Map();
    map
        .set('key1', 'value1')
        .set('key2', 'value2');

    console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
}
{
    // 중복 요소는 덮어 씌워지고 에러가 발생하지 않는다.

    const map = new Map();

    map
        .set('key1', 'value1')
        .set('key1', 'value2');

    console.log(map); // Map(1) { 'key1' => 'value2' }
}
{
    // NaN 비교
    // 일치 비교 연산자 ===을 사용하면 NaN 을 NaN과 다르다 평가
    // Map은 같다고 평하여 중복 추가를 허용하지 않는다.
    const map = new Map();

    console.log(NaN === NaN); // false
    console.log(0 === -0); // true

    // NaN 을 NaN과 같다고 평가하여 중복 추가되지 않는다.
    map.set(NaN, 'value1').set(NaN, 'value2');
    console.log(map); // Map(1) { NaN => 'value2' }

    // +0과 -0을 같다고 평가하여 중복 추가 되지 않는다.
    map.set(0, 'value1').set(-0, 'value2');
    console.log(map); // Map(2) { NaN => 'value2', 0 => 'value2' }
}
{
    // 객체는 키값으로 문자열 심벌값만 사용
    // Map은 제한 x

    const map = new Map();

    const lee = {name: 'Lee'};
    const kim = {name: 'Kim'};

    // 객체도 키로 사용 가능
    map
        .set(lee, 'developer')
        .set(kim, 'designer');

    console.log(map);
    /*
        Map(2) {
          { name: 'Lee' } => 'developer',
          { name: 'Kim' } => 'designer'
        }
    */
}

// 요소 취득
console.log("============== 요소 취득 ==============")
{
    // 키가 존재하지 않으면 undefined 반환
    const map = new Map();

    const lee = {name: 'Lee'};
    const kim = {name: 'Kim'};

    map
        .set(lee, 'developer')
        .set(kim, 'designer');

    console.log(map.get(lee)); // developer
    console.log(map.get('key')); // undefined
}

// 요소 존재 여부 확인
// Map.prototype.has
console.log("============== 요소 존재 여부 확인 ==============")
{
    const lee = {name:'Lee'};
    const kim = {name:'Kim'};

    const map = new Map([[lee, 'developer'],[kim, 'designer']]);
    console.log(map.has(lee)); // true
    console.log(map.has('key')); // false
}

// 요소 삭제
// Map.prototype.delete
// 삭제 성공시 true ,false 반환
console.log("============== 요소 삭제 ==============")
{
    const lee = {name:'Lee'};
    const kim = {name:'Kim'};
    const map = new Map([[lee, 'developer'], [kim, 'designer']]);
    map.delete(kim);

    console.log(map); // Map(1) { { name: 'Lee' } => 'developer' }
}
{
    // 존재하지 않는 요소 삭제시 에러 발생 x
    const map = new Map([['key1','value']]);

    map.delete('key2'); // 에러 무시
    console.log(map); // Map(1) { 'key1' => 'value' }
}
{
    // delete 메서드는 boolean 반환
    // 메서드 체이닝 안됨
    const lee = {name:'Lee'};
    const kim = {name:'Kim'};

    const map = new Map([[lee, 'developer'], [kim, 'designer']]);

   // map.delete(lee).delete(kim); TypeError: map.delete(...).delete is not a function
}


// 요소 일괄 삭제
// Map.prototype.clear
// clear 메서드는 언제나 undefined 반환
console.log("============== 요소 일괄 삭제 ==============");
{
    const lee = {name:'Lee'};
    const kim = {name:'Kim'};

    const map = new Map([[lee, 'developer'], [kim, 'designer']]);

    map.clear();
    console.log(map); // Map(0) {}
}

// 요소 순회
// Map.prototype.forEach, (요소값, 요소키, this) 인수
console.log("============== 요소 순회 ==============");
{
    const lee = {name:'Lee'};
    const kim = {name:'Kim'};

    const map = new Map([[lee, 'developer'], [kim, 'designer']]);

    map.forEach((v, k, map) => console.log(v, k, map));
    /*
        developer { name: 'Lee' } Map(2) {
        { name: 'Lee' } => 'developer',
            { name: 'Kim' } => 'designer'
        }
        designer { name: 'Kim' } Map(2) {
        { name: 'Lee' } => 'developer',
            { name: 'Kim' } => 'designer'
        }
    */
}
{
    // 맵 객체는 이터러블
    // for...of 문 순회
    // 스프레드 문법, 배열 디스트럭처링 할당 가능

    const lee = {name:'Lee'};
    const kim = {name:'Kim'};

    const map = new Map([[lee, 'developer'], [kim, 'designer']]);

    // 이터러블
    console.log(Symbol.iterator in map); // true

    // for... of
    for (const entry of map) {
        console.log(entry);
        /*
            [ { name: 'Lee' }, 'developer' ]
            [ { name: 'Kim' }, 'designer' ]
        */
    }

    // 스프레드 문법
    console.log([...map]); // [ [ { name: 'Lee' }, 'developer' ], [ { name: 'Kim' }, 'designer' ] ]

    // 배열 디스트럭처링
    const [a, b] = map;
    console.log(a, b); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
}
{
    // 이터러블이면서 동시에 이터레이터인 객체 반환 메서드 제공
    // Map.prototype.keys
    // Map.prototype.values
    // Map.prototype.entries

    const lee = {name:'Lee'};
    const kim = {name:'Kim'};

    const map = new Map([[lee, 'developer'], [kim, 'designer']]);

    for (const key of map.keys()){
        console.log(key);
        // { name: 'Lee' }
        // { name: 'Kim' }
    }

    for (const value of map.values()) {
        console.log(value);
        // developer
        // designer
    }

    for (const entry of map.entries()) {
        console.log(entry);
        // [ { name: 'Lee' }, 'developer' ]
        // [ { name: 'Kim' }, 'designer' ]
    }

}