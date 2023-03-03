export type Point = {
  x: number;
  y: number;
  z: number;
};

// duplicates code
// type ReadOnlyPoint = {
//   readonly x: number;
//   readonly y: number;
//   readonly z: number;
// };

// mapped type of point above so the
// mapped type syntax has three key portions [<loop-Variable> in <A-Union-of-types-to-loop-over>]: <output-type>
// type ReadOnlyPoint = {
//   readonly [Item in "x" | "y" | "z"]: number;
// };

// cleaned up
// type ReadonlyPoint = {
//   readonly [Item in keyof Point]: Point[Item];
// };

// make it generic -  this is actually baked in to typescript
// type Readonly<T> = {
//   readonly [Item in keyof T]: T[Item];
// };

// we want center to be immutable since center is a fix point so center.x = 100; should error out
// const center: ReadonlyPoint = {
//   x: 0,
//   y: 0,
//   z: 0,
// };

const center: Readonly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};

// center.x = 100;
