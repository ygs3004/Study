function multiply(x, y){
    console.log(arguments);
    return x*y;
}

console.log(multiply()) // NaN
console.log(multiply(1)) // NaN
console.log(multiply(1,2)) // 2
console.log(multiply(1,2,3)) // 2