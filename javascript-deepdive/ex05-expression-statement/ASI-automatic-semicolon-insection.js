// 자바스크립트의 ASI 는 자동으로 세미콜론을 붙여줌

function foo() {
    return
        {}
    // ASI 의 동작 예측 결과 => return; {};
    // 개발자가 착각 할 수 있는 예측 => return {};
}

console.log(foo()); // {}(x) undefined(o)

var bar = function () {}
(function() {})();

// ASI 의 동작 예측 결과 => var bar = function (){}(function() {})();
// 개발자가 착각 할 수 있는 예측 => var bar = function (){}; (function() {})();
// TypeError: (intermediate value)(...) is not a function
