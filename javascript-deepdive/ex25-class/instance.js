const Person = class MyClass{};

// 함수 표현식과 마찬가지로 식별자로 인스턴스를 생성해야함
const me = new Person();

// 함수와 동일하게 MyClass는 클래스 몸체 내부에서만 유효한 식별자, 외부코드에서 접근 불가
// const you = new MyClass();  ReferenceError: MyClass is not defined
// console.log(MyClass); ReferenceError: MyClass is not defined

