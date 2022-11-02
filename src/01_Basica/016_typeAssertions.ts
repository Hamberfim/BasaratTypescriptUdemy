function load(): unknown {
  return "  hello  ";
}

let hello = load();
// runtime type check
if (typeof hello == "string") {
  const trimmed = hello.trim();
}
// ^^^^^^ type check are preferred ^^^^^^
// instead we could use a type assertion  - opinionated in that we are telling typescript "I know what the type is, trust me"
const trimmed = (hello as string).trim(); // alternative syntax - angle bracket type assertion :  const trimmed = (<string>hello).trim(); <-- doesn't work in tsx files
