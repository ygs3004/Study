Array.prototype[Symbol.for('sum')] = function(){
    return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2][Symbol.for('sum')]()); // 3

// 추후 추가될 빌트인 메소드와 충돌 방지 가능