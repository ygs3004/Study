// 위, 아래, 왼쪽, 오른쪽을 나타내는 상수 정의
// 1, 2, 3, 4에는 의미가 없고 상수 이름에 의미가 있다
let Direction = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
}

// 변수에 상수를 할당
let myDirection = Direction.UP;

if(myDirection === Direction.UP){
    console.log('You are going UP.')
}

Direction = {
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right'),
}

myDirection = Direction.UP;

if(myDirection === Direction.UP){
    console.log('You are going UP.');
}


// JavaScript enum 
// enum 을 지원하지 않으므로 아래와 같이 흉내내어 사용 가능
// Direction 객체는 불변, 프로퍼티는 유일무이한 값

Direction = Object.freeze({
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right'),
});