// JSON.parse: JSON 포맷의 문자열을 객체로 변환, 이를 역직렬화(deserializing)
const obj = {
    name: 'Yoon',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis'],
};
const json = JSON.stringify(obj);

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
/*
object {
    name: 'Yoon',
        age: 20,
        alive: true,
        hobby: [ 'traveling', 'tennis' ]
}
*/

// 배열이 JSON 포맷의 문자열로 변환되어 있는경우 배열로 변환
// 배열의 요소가 객체인 경우 배열의 요소까지 객체로 변환
const todos = [
    {id:1, content:'HTML', completed: false},
    {id:2, content:'CSS', completed: true},
    {id:3, content:'JavaScript', completed: false},
];

const arrJson = JSON.stringify(todos);
const arrParse = JSON.parse(arrJson);
console.log(typeof arrParse, arrParse);
/*
object [
    { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'JavaScript', completed: false }
    ]
*/
