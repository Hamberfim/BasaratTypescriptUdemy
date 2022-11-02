// using a single shared field
type Square = {
  // add a literal type member to discriminate the type
  kind: "square";
  size: number;
};

type Rectangle = {
  // add a literal type member to discriminate the type
  kind: "rectangle";
  width: number;
  height: number;
};

// add circle shape
type Circle = {
  // add a literal type member to discriminate the type
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

function area(shape: Shape) {
  // check its discriminate literal value
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }
  // check its discriminate literal value
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
  // check its discriminate literal value
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

// discriminate the type using a boolean (can also use a numeric literal)
type ValidationSuccess = {
  // a literal type member to discriminate the type
  isValid: true;
  // readable only if true
  validatedValue: string;
};
type ValidationFailure = {
  // a literal type member to discriminate the type
  isValid: false;
  errorReason: string;
};
type ValidationResult = ValidationSuccess | ValidationFailure;

function logResult(result: ValidationResult): void {
  if (result.isValid) {
    console.log(`Success, validated value: ${result.validatedValue}`);
  }
  if (result.isValid === false) {
    console.log(`Failure, error result: ${result.errorReason}`);
  }
}
