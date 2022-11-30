// function type call signature
type Add = (a: number, b: number) => number;
const add: Add = (a: number, b: number) => {
  return a + b;
};
console.log(add(2, 4));

// call signature in body block - also allows for function overloads
type Subtract = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugName?: string;
};
const subtract: Subtract = (a: number, b: number, c?: number) => {
  return a - b - (c != null ? c : 0);
};

subtract.debugName = "An Additional Function";
console.log(subtract(8, 4));
console.log(subtract(12, 2, 3));

// used on a class
type PointCreator = new (x: number, y: number) => { x: number; y: number };
const Point: PointCreator = class {
  constructor(public x: number, public y: number) {}

  moveMethod() {
    (this.x += 1), (this.y += 1);
  }
};

export {};
