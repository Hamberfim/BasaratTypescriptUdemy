/**
 *  type: Unions, Intersections (&), Primitives, Shorthand Functions, Advances Type Functions.
 *  interface: Familiarity (extends), Declaration Merging.
 */

// interface
export interface InputProps1 {
  // body of each has a 1:1 correspondence
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

// same as type alias
// export type InputProps2 = {
//   // body of each has a 1:1 correspondence
//   type: "text" | "email";
//   value: string;
//   onChange: (newValue: string) => void;
// };

// type alias extracted out
type InputOnChange = (newValue: string) => void;
type InputValue = string;
type InputType = "text" | "email";

export type InputProps2 = {
  // body of each has a 1:1 correspondence
  type: InputType;
  value: InputValue;
  onChange: InputOnChange;
};
