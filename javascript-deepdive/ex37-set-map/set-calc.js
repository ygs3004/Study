// Set => 수학접 집합을 구현하기위한 자료구조
// 교집합 합집합 차집합 등 구현 가능

// 교집합 구현
// Set.prototype.intersection
{
    Set.prototype.intersection = function (set) {
        const result = new Set

        for (const value of set) {
            // 2개의 set의 요소가 공통되는 요소이면 교집합의 대상
            if(this.has(value)) result.add(value);
        }

        return result;
    };

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);
    
    // 교집합 결과
    console.log(setA.intersection(setB)); // Set(2) { 2, 4 }
    console.log(setB.intersection(setA)); // Set(2) { 2, 4 }
}

// 교집합 구현2
{
    Set.prototype.intersection = function (set) {
        return new Set([...this].filter(v => set.has(v)));
    };

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);

    // 교집합 결과
    console.log(setA.intersection(setB)); // Set(2) { 2, 4 }
    console.log(setB.intersection(setA)); // Set(2) { 2, 4 }
}

// 합집합 구현
// 중복 없는 모든 요소로 구성
{
    Set.prototype.union = function (set) {
        // this (Set 객체) 복사
        const result = new Set(this);

        for (const value of set) {
            // 합집합은 두개의 Set 의 모든 요소로 구성, 중복된 요소는 포함되지 않는다.
            result.add(value);
        }

        return result;
    };

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);

    // 합집합 결과
    console.log(setA.union(setB)); // Set(4) { 1, 2, 3, 4 }
    console.log(setB.union(setA)); // Set(4) { 2, 4, 1, 3 }
}
// 합집합 구현2
{
    Set.prototype.union = function (set) {
        return new Set([...this, ...set]);
    };
    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);

    // 합집합 결과
    console.log(setA.union(setB)); // Set(4) { 1, 2, 3, 4 }
    console.log(setB.union(setA)); // Set(4) { 2, 4, 1, 3 }
}

// 차집합 구현
{
    Set.prototype.difference = function (set) {

        const result = new Set(this);

        for (const value of set) {
            result.delete(value);
        }

        return result;
    };

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);
    
    // setA - settB
    console.log(setA.difference(setB)); // Set(2) { 1, 3 }
    // setB - setA
    console.log(setB.difference(setA)); // Set(0) {}
}
// 차집합 구현 2
{
    Set.prototype.difference = function (set) {
        return new Set([...this].filter(v => !set.has(v)));
    };

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);

    console.log(setA.difference(setB)); // Set(2) { 1, 3 }
    console.log(setB.difference(setA)); // Set(0) {}
}

// 부분집합과 상위집합
{
    // this가 subset의 상위 집합인지 확인한다.
    Set.prototype.isSuperset = function (subset) {
        for (const value of subset) {
            if (!this.has(value)) return false;
        }

        return true
    };

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);

    console.log(setA.isSuperset(setB)); // true
    console.log(setB.isSuperset(setA)); // false
}
// 상위집합 2
{
    Set.prototype.isSuperset = function (subset) {
        const supersetArr = [...this];
        return [...subset].every(v => supersetArr.includes(v));
    };

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([2, 4]);

    console.log(setA.isSuperset(setB)); // true
    console.log(setB.isSuperset(setA)); // false
}
