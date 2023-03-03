let jsStringLiteral;
jsStringLiteral = "hello";

let jsTemplateLiteral;
jsTemplateLiteral = `${jsStringLiteral}`;

// typescript
let strLiteral: "only this string";
strLiteral = "only this string";
// strLiteral = "anything else";  // Type '"anything else"' is not assignable to type '"only this string"'

// template literal type
let templateLiteral: `Example: ${string}`;
templateLiteral = "Example: ";
templateLiteral = "Example: something";
templateLiteral = "Example: anything";
// templateLiteral = "More Example: anything";  // Type '"More Example: anything"' is not assignable to type '`Example: ${string}`'

// use case
type CSSValue = number | `${number}px` | `${number}em` | `${number}rem`; // implies px | number + px|em|rem
function size(input: CSSValue) {
  // if its a number only add px otherwise leave it as is
  return typeof input == "number" ? input + "px" : input;
}
const twelve = size(12);
console.log(twelve);
const five = size("5px");
console.log(five);
size(123);
size("123px");
// size("123ex");  // Argument of type '"123ex"' is not assignable to parameter of type 'CSSValue'

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";
type Style = `${Size}-${Color}`;
/**
 * @param style is a combination of
 * Size: 'small' or 'medium' or 'large'
 * Color: 'primary' or 'secondary'
 * e.g., small-secondary
 */
function applyStyle(style: Style) {}
applyStyle("small-primary");
// applyStyle("meduim-primary");  // Argument of type '"meduim-primary"' is not assignable to parameter of type '"small-primary" | "small-secondary" | "medium-primary" | "medium-secondary" | "large-primary" | "large-secondary"'
