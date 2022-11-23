// a function that always throw so can never return a value
// typescript infers : const fail: (message: string) => never
const fail = (message: string) => {
  throw new Error(message);
};

// can also be used as an explicit type
let example: never;

// code example of never
type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  if (s.kind === "square") {
    return s.size * s.size;
  } else if (s.kind === "rectangle") {
    return s.width * s.height;
  } else if (s.kind === "circle") {
    return Math.PI * s.radius ** 2;
  }

  // an assertion to protect against 's' NOT equal to never as a type
  const _ensureAllCasesAreHandled: never = s;
  return _ensureAllCasesAreHandled; // assures that the return type will always be a number rather than a number or undefined
}

export {};
