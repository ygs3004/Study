const person = {
    name: 'Yoon',
    getName(){
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩
        return this.name;
    }
};

console.log(person.getName()); // this -> 호출하는 객체

const anotherPerson = {
    name:'GunSoo'
}

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName()); // this -> anotherPerson이 호출 하였으므로 anotherPerson

// 메서드를 변수에 할당
const getName = person.getName;

console.log(getName()); // 일반 함수로 호출 -> 글로벌 객체의 name과 같다 undefined

function Person(name){
    this.name = name;
}


// 프로토타입 메서드 this -> 호출한 객체에 바인딩
Person.prototype.getName = function(){
    return this.name;
}
Person.prototype.name = 'GunSoo';
const me = new Person('Yoon');

// me 객체의 getName 호출
console.log(me.getName()); // Yoon

console.log(Person.prototype.getName()); // GunSoo

