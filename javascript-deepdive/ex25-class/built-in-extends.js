// 빌트인 함수또한 [[Construct]] 내부 메서드를 갖고 있으므로 확장 가능

class MyArray extends Array {
    
    // 모든 메서드(map, filter, uniq, average 등)가 MyArray 가 아닌 Array 타입으로 인스턴스를 반환하도록 변경
    static get [Symbol.species]() {return Array};
    
    // 중복된 배열 요소를 제거하고 반환
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }
    
    // 배열의 평균
    average() {
        return this.reduce((pre, cur) => pre+cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray); // MyArray(4) [ 1, 1, 2, 3 ]

// MyArray.prototype.uniq
console.log(myArray.uniq());

// MyArray.prototype.average
console.log(myArray.average()); // 1.75