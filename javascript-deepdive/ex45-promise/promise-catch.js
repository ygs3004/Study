// Promise.prototype.catch
// 프로미스가 rejected 상태인 경우 호출
// 프로미스를 반환

// rejected
new Promise((_, reject) => reject(new Error('rejected')))
    .catch(e => console.log(e)); // rejected

// then(undefined, onReject)와 동일하게 동작
new Promise((_, reject) => reject(new Error('rejected')))
    .then(undefined, e => console.log(e));
