export type Point = {
  x: number;
  y: number;
  z: number;
};

const center: Readonly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};

// use case
function makeReadonly<T>(object: T): Readonly<T> {
  return Object.freeze({ ...object });
}

const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2;

const readonlyPoint = makeReadonly(editablePoint);
// readonlyPoint.x = 3;  // Cannot assign to 'x' because it is a read-only property
