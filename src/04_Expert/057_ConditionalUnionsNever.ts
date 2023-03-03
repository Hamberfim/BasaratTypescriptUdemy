// error utility function
function error(message: string): never {
  throw new Error(message);
}
// assigned something that should never happen but is assigned a string
// const notAllowed: never = "some String";

const allowed: never = error("This is o.k.");
const example: string = error("I will not return");

type Verbose = string | never; // this is saying that Verbose's type will always be a string

// distribution of unions in conditional types
//a conditional type no-empty that takes in a input of T and checks if it extends null or undefined and if so maps it to never as it's type otherwise maps it to the type T
export type NoEmpty<T> = T extends null | undefined ? never : T;

// pass it to a union of two types - result each is the same - its always a string
type Example = NoEmpty<string | null>;
type expandedExample = NoEmpty<string> | NoEmpty<null>;
// inline expansion //
type inlineExpandedExample = (string extends null | undefined ? never : string) | (null extends null | undefined ? never : string);
