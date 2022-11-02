let vowelMatching = (inputStr: string) => {
  let result = inputStr.match(/[aeiou]/gi);
  if (result == null || result == undefined) {
    console.log("Sorry, No Match");
  } else {
    console.log(result);
  }
};
vowelMatching("hello");
vowelMatching("mississippi");
vowelMatching("sky");
//

// why below works
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(undefined == null); // true
// /* tsconfig.json
// "strict": true /* Enable all strict type-checking options. */,
// "noImplicitAny": true /* Enable error reporting for expressions and declarations with an implied 'any' type. */,
// "strictNullChecks": true /* When type checking, take into account 'null' and 'undefined'. */

function someBooleanOrNullOrUndefined(): boolean | null | undefined {
  let result;
  const myRandNum = Math.random();
  if (myRandNum <= 0.3333) {
    result = true;
  } else if (myRandNum > 0.3333 && myRandNum <= 0.6666) {
    result = null;
  } else {
    result = undefined;
  }
  return result;
}
const result = someBooleanOrNullOrUndefined();
if (result != null) {
  console.log("Boolean:", result);
}
if (result == null) {
  console.log("Null or Undefined:", result); // undefined == null // true
}

function decorateStr(value: string | null | undefined) {
  if (value == null) {
    return value;
  } else {
    return `-- ${value.trim()} --`;
  }
}
console.log(decorateStr("        Big Pizza        "));
console.log(decorateStr(null));
console.log(decorateStr(undefined));
