// function (method) overloading is done by creating multiple signatures before the body is declared
function reverse(string: string): string;
function reverse(stringArray: string[]): string[];
function reverse(strOrStrArray: string | string[]) {
  if (typeof strOrStrArray == "string") {
    return strOrStrArray.split("").reverse().join("");
  } else {
    return strOrStrArray.slice().reverse();
  }
}

// infers 'const tacocat: string' instead of 'const tacocat: string | string[]'
const tacocat = reverse("tacocat");
console.log(tacocat);

// infers 'const myArr: string[]' instead of 'const myArr: string | string[]'
const myArr = reverse(["bob", "lynda", "tina"]);
console.log(myArr);

console.log(); // space in output

// function (method) overloading is done by creating multiple signatures before the body is declared
function makeDate(timeStamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(timeStampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timeStampOrYear, month - 1, day);
  } else {
    return new Date(timeStampOrYear);
  }
}

const turnOfCent = makeDate(2000, 1, 1); // Jan 1, 2000
// const invalid = makeDate(2000, 1 /* missing parameter error is ignored without overload signatures */);
console.log(turnOfCent);
const epoch = makeDate(0); // June 1, 1970
console.log(epoch);
