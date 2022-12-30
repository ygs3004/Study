// 생성자 함수가 아닌 일반 함수 호출시 this에 undefined가 바인딩, 생성자가 아닌경우 this가 필요하지 않기 때문
(function(){
    'use strict';

    function foo(){
        console.log(this);
    }
    foo(); //

    function Foo(){
        console.log(this);
    }

    new Foo();

}());

// 매개변수에 전달된 인수를 재할당하여도 arguments에 반영되지 않음
(function(a){
    'use strict';
    a=2;

    console.log(arguments)
}(1));