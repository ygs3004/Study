// console.log(Person); ReferenceError: Cannot access 'Person' before initialization
// 호이스팅이 발생하지 않는것처럼 보임
// class Person{}

const Person = '';

{
    // 호이스팅이 발생하지 안흔ㄴ다면 '' 이 출력되어야 한다.
    console.log(Person); // ReferenceError: Cannot access 'Person' before initialization
    class Person{};
}