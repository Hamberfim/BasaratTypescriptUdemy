type ExampleOptional = {
  name?: string;
};

let optional: ExampleOptional;
optional = { name: undefined };
optional = {}; // doesn't error out

type ExampleUnion = {
  name: string | undefined;
};

let union: ExampleUnion;
union = { name: undefined };
// union = {};  // Property 'name' is missing in type '{}' but required in type 'ExampleUnion'.

function logOptional(message?: string) {
  console.log(message);
}
logOptional(undefined);
logOptional(); // doesn't error out

function logUnion(message: string | undefined) {
  console.log(message);
}
logUnion(undefined);
// logUnion();  // Expected 1 arguments, but got 0
