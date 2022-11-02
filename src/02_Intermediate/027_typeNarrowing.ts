// typeof works on primitive types  -- otherwise it returns 'object'
type PaddingLeft = number | string;
function padLeft(value: string, padding: PaddingLeft) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected number or string, got '${padding}'.`);
}

// narrow non-primitive types - between js classes
class Cat {
  makeMeow() {
    console.log("Meow!");
  }
}

class Dog {
  makeBark() {
    console.log("Bark!");
  }
}

type Animal = Cat | Dog;
// narrow class using 'instanceof' operator
function animalSpeak(animal: Animal) {
  if (animal instanceof Cat) {
    animal.makeMeow();
  }
  if (animal instanceof Dog) {
    animal.makeBark();
  }
}

const myDog = new Dog();
myDog.makeBark();

// narrow type alias object using the 'in' operator
type Square = { size: number };
type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;
function area(shape: Shape) {
  // if it has a 'size' member its a square
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  // if it has a 'width' member its a rectangle
  if ("width" in shape) {
    return shape.width * shape.height;
  }
}

const sqr = area({ size: 2 }); // 4
const rect = area({ width: 2, height: 3 }); // 6
console.log(sqr);
console.log(rect);

export {};
