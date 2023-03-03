type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

export type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends symbol
  ? "symbol"
  : T extends bigint
  ? "bigint"
  : T extends Function
  ? "function"
  : T extends null
  ? "null"
  : "object";

function typeName<T>(t: T): TypeName<T> {
  if (t === null) {
    return "null" as TypeName<T>;
  }
  return typeof t as TypeName<T>; // 'TypeName<T>' is modeling at compile time what 'typeof t' does at runtime
}

const str = typeName("Hello World");
console.log(str);
const num = typeName(123);
console.log(num);
const bool = typeName(true);
console.log(bool);
const undef = typeName(undefined);
console.log(undef);
const sym = typeName(Symbol("star"));
console.log(sym);
// require transpilation to ES2020+
// const big = typeName(24n);
// console.log(big);
const func = typeName(function () {});
console.log(func);
const obj = typeName(null);
console.log(obj);
