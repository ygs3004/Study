// node-fetch: Node.js 환경에서 window.fetch 함수를 사용하기 위한 패키지
// 브라우저에서의 경우 아래 코드 불필요
// https://github.com/node-fetch/node-fetch
const fetch = require('node-fetch');

// 제네레이터 실행기
const async = generatorFunc => {
    const generator = generatorFunc();

    const onResolved = arg => {
        const result = generator.next(arg);

        return result.done
            ? result.value
            : result.value.then(res => onResolved(res));
    };

    return onResolved;
}

(async(function* fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = yield fetch(url);
    const todo = yield response.json();
    console.log(todo);
    // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
})());

// 위 함수는 완전하지 않음
// async 와 같은 제너레이터 실행기가 필요하다면 co 라이브러리 이용
// const co = require('co');
// co(function* fetchTodo(){......