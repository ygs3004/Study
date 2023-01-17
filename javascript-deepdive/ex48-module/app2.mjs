// as 를 이용하여 프로퍼티로 할당 가능
import * as lib from "./export.mjs";
// 개별 할당도 가능
// import {pi as PI, square as sq, Person as P} from "./export.mjs";

console.log(lib.pi, "as 이용");
console.log(lib.square(10), "as 이용");
console.log(new lib.Person('Yoon'), "as 이용");