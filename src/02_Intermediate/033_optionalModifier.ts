type Person = {
  name: string;
  email: string;
  phone?: string; // Typescript adds -> | undefined as a union type
};

const tom: Person = {
  name: "Tom",
  email: "tom@fake.com",
  phone: "555-555-5555",
};

const pam: Person = {
  name: "Pam",
  email: "pam@fake.com",
};

// example 2
class Point {
  x?: number; // Typescript adds -> | undefined as a union type
  y?: number; // Typescript adds -> | undefined as a union type
  z?: number; // Typescript adds -> | undefined as a union type
}

const somePoint = new Point();
somePoint.x = 0;
console.log(somePoint);
somePoint.y = 0;
console.log(somePoint);
somePoint.z = 1;
console.log(somePoint);

export {};
