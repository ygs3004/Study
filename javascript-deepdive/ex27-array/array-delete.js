// 배열은 객체이기 때문에 delete 사용 가능
let arr = [1,2,3];

delete arr[1];
console.log(arr); // [ 1, <1 empty item>, 3 ]

// length 프로퍼티에 영향을 주지 않고 희소배열이 된다
console.log(arr.length) // 3

// 희소배열을 만들지 않고 완전희 삭제하려면 Array.prototype.splice 메서드 이용

arr = [1, 2, 3];
arr.splice(1) // (삭제를 시작할 인덱스, 삭제할 요소 수) 삭제할 요소수 미 입력시 전부 삭제
console.log(arr); // [1, 3]
console.log(arr.length); // 2