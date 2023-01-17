// await 키워드는 Promise 가 settled 상태가 될때까지 대기하다가
// Promise 가 resolve 한 결과를 반환한다.
import fetch from 'node-fetch'

const getGithubUserName = async id => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    const {name} = await res.json();
    console.log(name);
};

getGithubUserName('ygs3004'); // 윤건수

async function foo() {
    const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));

    console.log([a, b, c], "약 6초 소요");
}
foo(); // [1, 2, 3] 약 6초 소요된다.

// 순차적 처리를 할 필요가 없을 경우
async function baz() {
    const res = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000))
    ]);

    console.log(res, "약 3초 소요");
}
baz(); // [1, 2, 3] 약 3초 소요

// 처리 순서가 보장되야 할 경우
async function bar(n) {
    const a = await new Promise(resolve => setTimeout(() => resolve(n), 3000));
    // 두 번재 비동기 처리를 위해 첫 번째 비동기 처리 결과가 필요
    const b = await new Promise(resolve => setTimeout(() => resolve(a+1), 2000));
    // 세 번재 비동기 처리를 위해 두 번째 비동기 처리 결과가 필요
    const c = await new Promise(resolve => setTimeout(() => resolve(b+1), 1000));

    console.log([a, b, c]);
}
bar(1);