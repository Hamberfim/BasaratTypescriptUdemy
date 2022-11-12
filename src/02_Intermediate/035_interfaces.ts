// type
type Point2D = {
  x: number;
  y: number;
};

// interface - functions similar to class
interface Point3D {
  x: number;
  y: number;
  z: number;
}

type PersonOne = {
  name: string;
};

const personOne: PersonOne = {
  name: "Tom",
};

interface PersonTwo {
  name: string;
  email?: string;
  age?: number;
}

interface Student extends PersonTwo {
  major: string;
  Id: number;
}

const student: Student = {
  name: "Bill",
  major: "Biology",
  Id: 09564,
};

export {};
