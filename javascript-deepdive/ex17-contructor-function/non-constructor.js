// constructor : 함수 선언문, 함수 표현식, 클래스 
// non-constructor : ES6 축약 메서드, 화살표 함수

//constructor
function foo(){};
const bar = function(){};
const baz = {x:function(){}};

new foo(); // foo {}
new bar(); // bar {}
new baz.x(); // {}

//non-constructor
const arrow = () => {};
const obj = {
    x(){}
};
// new arrow();
// new obj.x();
