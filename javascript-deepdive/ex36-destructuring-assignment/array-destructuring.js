// ES5
var arr = [1, 2, 3];
var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3

// ES6 배열 디스트럭처링 할당
// 할당 기준은 배열의 인덱스
arr = [4, 5, 6];
[one, two, three] = arr;

console.log(one, two, three) // 4 5 6

// 변수를 배열 리터럴로 선언
// 우변에 이터러블을 할당하지 않을시 에러
// let [x, y]; SyntaxError: Missing initializer in destructuring declaration
// let [a, b] = {}; TypeError: {} is not iterable
// 변수 개수와 이터러블 요소 개수가 일치할 필요는 없다.

const [a, b] = [1, 2];
console.log(a, b); // 1 2

const [c, d] = [1];
console.log(c, d); // 1 undefined

const [e, f] = [1, 2, 3];
console.log(e, f); // 1, 2

const [g, , h] = [1, 2, 3];
console.log(g, h); // 1 3

// 배열 디스트럭처링 할당 기본값 설정
{
    const [a, b ,c = 3] = [1, 2];
    console.log(a, b); // 1 3

// 기본값보다 할당값 우선
    const [e, f = 10, g = 3] = [1, 2];
    console.log(e, f, g); // 1 2 3
}

// Rest 요소 사용 가능
const [x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]

// URL 파싱 예제
// url 을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체 생성
function parseURL(url = '') {
    // '://' 앞의 문자열(protocol)과 '/' 이전의 '/'로ㅓ 시작하지 않는 문자열(host)과
    // 'ㅣ'이후의 문자열(path)를 검색한다.
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);
    /*
        [
          'https://developer.mozilla.org/ko/docs/Web/JavaScript',
          'https',
          'developer.mozilla.org',
          'ko/docs/Web/JavaScript',
          index: 0,
          input: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
          groups: undefined
        ]
    */

    if(!parsedURL) return {};

    // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소 추출
    const [, protocol, host, path] = parsedURL;
    return {protocol, host, path};
}

const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
console.log(parsedURL);
/*
    {
      protocol: 'https',
      host: 'developer.mozilla.org',
      path: 'ko/docs/Web/JavaScript'
    }
*/
