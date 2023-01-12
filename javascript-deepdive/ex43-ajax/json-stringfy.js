// JSON.stringfy 메서드는 객체를 JSON 포맷의 문자열로 변환한다.
// 클라이언트가 서버로 객체를 전송하기 위해 문자열화 하는데 이를 직렬화(serializing)이라 한다.
// JSON 키, 문자열은 반드시 큰따옴표로 묶어야한다.

const obj = {
    name: 'Yoon',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis'],
};

// 객체를 JSON 포맷의 문자열로 변환
const json = JSON.stringify(obj);
console.log(typeof json, json); // string {"name":"Yoon","age":20,"alive":true,"hobby":["traveling","tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
/*
string {
    "name": "Yoon",
        "age": 20,
        "alive": true,
        "hobby": [
        "traveling",
        "tennis"
    ]
}
*/

// replacer 함수, 결과 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
    // undefined: 반환되지 않음
    return typeof value === 'number' ? undefined : value;
}

// JSON.stringfy 메서드에 두 번째 인수로 replacer 함수를 전달
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
/*
string {
    "name": "Yoon",
        "alive": true,
        "hobby": [
        "traveling",
        "tennis"
    ]
}
*/

// JSON.stringify: 객체뿐 아니라 배열도 변환가능
const todos = [
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'JavaScript', completed: false},
];

// 배열을 JSON 포맷의 문자열로 변환
const arrJson = JSON.stringify(todos, null, 2)
console.log(typeof arrJson, arrJson);
/*
string [
    {
        "id": 1,
        "content": "HTML",
        "completed": false
    },
        {
            "id": 2,
            "content": "CSS",
            "completed": true
        },
        {
            "id": 3,
            "content": "JavaScript",
            "completed": false
        }
    ]
*/
