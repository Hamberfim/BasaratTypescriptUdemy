// type assertions do not change the variable
let leet: unknown = "1337";

// assertion
let leetNum = leet as number;
console.log(typeof leetNum, leetNum == 1337); // true
console.log(typeof leetNum, leetNum === 1337); // false - the data type is actually a string asserted as a number
