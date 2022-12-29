// 전역 네임스페이스 객체 : 식별자 충돌은 방지 가능하나, 전역 변수를 사용하긴 함
var MYAPP = {};

MYAPP.name = 'Yoon';

console.log(MYAPP.name);

// 계층형 네임스페이스
MYAPP.person = {
    name: 'Yoon',
    address: 'Seoul'
};

console.log(MYAPP.person.name); 