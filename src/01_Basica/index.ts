// videos 1 -8 - Basarat Ali Syed - TypeScript for Professionals on Udemy
// primitives types
let isTrue: boolean = false;
let thisNumber: number = 12.4;
let greet: string = "hello";

let notDefined: undefined = undefined;
let notPresent: null = null;

let octagon: symbol = Symbol("octagon");
console.log(octagon);

// BigInt literals are not available when targeting lower than ES2020
// let hugeNumber: bigint = 18n;
let hugeNumber: number = 180000;
console.log(typeof hugeNumber);

// instance types
let regex: RegExp = new RegExp("ab+c");
console.log(regex);

let numArray: number[] = [1, 2, 3];
let numArr: Array<number> = [0, 1, 2];
let strArray: string[] = ["0", "1", "2"];
let strArr: Array<string> = ["0", "1", "2"];

// tuple
let tupleStr: [string, string] = ["orange", "red"];
let tupleNum: [number, number] = [1, 1];

let set: Set<number> = new Set([1, 2, 3, 3, 2, 1, 5, 2, 6, 5, 4, 4, 4]);
console.log(set);

// object types
let center: { x: number; y: number } = { x: 0, y: 0 };

// type aliases
type Point = { x: number; y: number };

let leftCenter: Point = { x: -3, y: 0 };

const centerPoint: Point = { x: 0, y: 0 };

function add(a: number, b: number): number {
  return a + b;
}

function greeting(name: string): void {
  console.log("Hello " + name);
}

// using the rest parameter
function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}
console.log("Sum: " + sum(1, 2));
console.log("Sum: " + sum(1, 2, 3, 4, 5));

// first class functions
let subtract: (lrgNum: number, smNum: number) => number;
subtract = function (lrgNum: number, smNum: number): number {
  return lrgNum - smNum;
};

// first class function with type
type MyAdd = (a: number, b: number) => number;
let myAdd: MyAdd;
myAdd = function (a: number, b: number): number {
  return a + b;
};

// structural typing
type User = { id: string };
type Product = { id: string };
let user: User = { id: "user-9343asfe" };
let product: Product = { id: "product-0343krfe" };
//  - same type compatibility
user = product;
product = user;

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };
// the smaller member type can be directly assigned the larger member type
point2D = point3D;
// can be used indirectly also
function takesPoint2D(point: Point2D) {}
takesPoint2D(point3D); // duck typing

//generic type - first in/first out
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push();
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();

// type unions
type Poem = { name: string; pages: number; rhymes?: undefined } | { name: string; pages?: number; rhymes: boolean };
for (let index = 0; index < 3; index++) {
  const poem: Poem = Math.random() > 0.5 ? { name: "Double Dragon", pages: 123 } : { name: "Why it's True", rhymes: true };
  console.log(poem);
}
