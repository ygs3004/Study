let typeArr = [];

typeArr.push(typeof ''); // string
typeArr.push(typeof 1); // number
typeArr.push(typeof NaN); // number
typeArr.push(typeof true); // boolean
typeArr.push(typeof undefined); // undefined
typeArr.push(typeof Symbol()); // symbol
typeArr.push(typeof null); // object
typeArr.push(typeof []); // object
typeArr.push(typeof {}); // object
typeArr.push(typeof new Date()); // object
typeArr.push(typeof /test/gi); // object
typeArr.push(typeof function(){}); // function

typeArr.forEach(a => console.log(a))


