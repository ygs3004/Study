// 암묵적 전역
(function(){
    // 'use strict';

    x=1;
    console.log(x); // ReferenceError: x is not defined
}());

// 변수, 함수, 매개변수의 삭제
(function(){
    // 'use strict';

    var x = 1;
    delete x;

    function foo(a){
        delete a;
    }
    delete foo;
}());

// 매개변수 이름의 중복
(function(){
    // 'use strict';

    function foo(x, x){
        return x+x;
    }
    console.log(foo(1,2));
}());