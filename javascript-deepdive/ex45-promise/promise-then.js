// Promise.prototype.then
// 첫 번째 콜백 함수는 프로미스가 fulfilled 상태가 되면 호출
// 두 번재 콜백 함수는 프로미스가 rejected 상태가 되면 호출

new Promise(resolve => resolve('fulfilled'))
    .then(v => console.log(v), e => console.error(e));

new Promise((_, reject) => reject(new Error('rejected')))
    .then(v => console.log(v), e => console.error(e));
