// 클로저 사용시 발생하는 실수
var funcs = [];

for(var i=0; i<3; i++){
    funcs[i] = function(){
        return i;
    };
}

for(var j=0; j< funcs.length; j++){
    console.log(funcs[j]());
} // 3 3 3 
// var i 가 전역변수 여서 제대로 동작하지 않음, let으로 바꾸거나 아래방법 필요
funcs = [];

for(var i=0; i<5; i++){
    funcs[i] = (function(id){
        return function(){
            return id;
        };
    }(i));
}

for(var j=0; j<funcs.length; j++){
    console.log(funcs[j]());
}