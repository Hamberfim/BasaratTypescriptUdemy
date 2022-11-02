type PointExample1 = {
  x: number;
  y: number;
};

const point1: PointExample1 = {
  x: 0,
  y: 0,
};

// variable re-assignment error
// point1 = { x: 1, y: 1 };  // Cannot assign to 'point' because it is a constant.ts(2588)

// property assignment doesn't produce an error
point1.x = 1;
point1.y = 1;

// readonly is a compile time only feature used for compile time error checking and can be combined with class member access
type PointExample2 = {
  readonly x: number;
  readonly y: number;
};

const point2: PointExample2 = {
  x: 0,
  y: 0,
};

// property assignment with a readonly does produce an error
// point2.x = 1;  Cannot assign to 'x' because it is a read-only property.ts(2540)
// point2.y = 1;  Cannot assign to 'y' because it is a read-only property.ts(2540)

// readonly is a compile time only feature used for compile time error checking and can be combined with class member access
class Animal {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal("Sheep");

export {};
