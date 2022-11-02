// universal super types
let exampleAny: any; // basically ignores / bypasses the TS type system
let exampleUnknown: unknown; // is safer (sort of a more type safe version of any), because you have type check and narrow.

// 'any' accepts all types but bypasses typescript's type system
exampleAny = 123.1235;
exampleAny = " hello ";

// 'unknown' accepts all types too
exampleUnknown = 123.1235;
exampleUnknown = " hello ";

// unknown - accepts all types too, but is safer as it requires some type checking and narrowing
const myRandNum = Math.random();
if (myRandNum <= 0.3333) {
  exampleUnknown = 123.1235;
} else if (myRandNum > 0.3333 && myRandNum <= 0.6666) {
  exampleUnknown = " hello ";
} else {
  exampleUnknown = true;
}
// exampleUnknown = Math.random() > 0.5 ? 123.1235 : " hello ";

// check type to narrow - 'unknown' requires an explicit runtime check
if (typeof exampleUnknown == "number") {
  console.log(exampleUnknown.toFixed(2));
} else if (typeof exampleUnknown == "string") {
  console.log(exampleUnknown.trim().toUpperCase());
} else if (typeof exampleUnknown == "boolean") {
  console.log(exampleUnknown.valueOf());
}
