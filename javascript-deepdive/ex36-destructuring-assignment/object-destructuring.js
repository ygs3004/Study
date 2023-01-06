// ES5
var user = { firstName: 'GunSoo', lastName: 'Yoon' };

var firstName = user.firstName;
var lastName = user.lastName;

console.log(firstName, lastName); // GunSoo Yoon

// ES6 디스트럭처링 할당
// 좌변에 프로퍼티 값을 할당받을 변수 선언, 객체 리터럴 형태로 선언
// 우변에 객체 또는 객체로 평가될 수 있는 표현식을 할당 -> 어길 시 에러
// 프로퍼티 키를 기준으로 할당, 순서는 의미 없다.
{
    const {lastName, firstName} = user;
    console.log(firstName, lastName); // GunSoo Yoon
}

{
    // const{lastName, firstName}; SyntaxError: Missing initializer in destructuring declaration
    // const {lastName, firstName} = null; TypeError: Cannot destructure property 'lastName' of 'null' as it is null.
}

{
    // 프로퍼티 축약 표현
    // const {lastName, firstName} = user;

    const {lastName: lastName, firstName: firstName} = user;
}
// 객체의 프로퍼티 키와 다른 변수이름으로 프로퍼티를 할당 받으려면 변수 선언 필요
{
    const user = { firstName: 'GunSoo', lastName: 'Yoon' };
    const {lastName: ln, firstName: fn} = user; // 할당받을 변수의 키값: 새로운 키값
    console.log(fn, ln); // GunSoo Yoon
}
// 객체 디스트럭처링 할당 기본값 설정
{
    const { firstName = 'GunSoo', lastName } = {lastName: 'Yoon'}
    console.log(firstName, lastName); // GunSoo Yoon

    const { firstName: fn = 'Default', lastName: ln } = { lastName: 'Yoon' };
    console.log(fn, ln); // Default Yoon
}
// 객체에서 프로퍼티 키로 값만 추출하여 변수에 할당
{
    const str = 'Hello';
    // String 래퍼 객체로부터 length 프로퍼티만 추출
    const {length} = str;
    console.log(length); // 5

    const todo = { id: 1,  content: 'HTML', completed: true };
    // todo 객체로부터 id 프로퍼티만 추출
    const {id} = todo;
    console.log(id); // 1

    // 객체를 인수로 전달받는 함수의 매개변수에 사용 가능
    function printTodo(todo) {
        console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료' } 상태입니다.`);
    }

    printTodo({ id: 1,  content: 'HTML', completed: true }) ; // 할일 HTML은 완료 상태입니다.

    printTodo = function({content, completed}){
        console.log(`할일 ${content}은 ${completed ? '완료' : '비완료' } 상태입니다.`);
    }

    printTodo({ id: 1,  content: 'HTML', completed: true }) ; // 할일 HTML은 완료 상태입니다.
}

// 배열의 요소가 객체인경우 배열, 객체 디스트럭처링 할당을 혼용 가능
{
    const todos = [
        {id: 1, content: 'HTML', completed: true},
        {id: 2, content: 'CSS', completed: false},
        {id: 3, content: 'JS', completed: false},
    ];

    // todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
    const [, {id}] = todos;
    console.log(id); // 2
}

// 중첩 객체의 경우
{
    const user = {
        name: 'Yoon',
        address: {
            zipCode: '03068',
            city: 'Seoul'
        }
    }

    const { address: {city} } = user;
    console.log(city);  // 'Seoul'
}

// Rest 프로퍼티, 반드시 마지막에 위치
{
    const {x, ...rest} = {x: 1, y: 2, z: 3};
    console.log(x, rest); // 1 { y: 2, z: 3 }
}
