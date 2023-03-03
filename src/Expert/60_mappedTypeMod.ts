export type Point = {
  readonly x: number;
  y?: number;
};

export type MappedA<T> = {
  +readonly [P in keyof T]+?: T[P]; // add the opt ?
};
export type ResultA = MappedA<Point>;

export type MappedB<T> = {
  -readonly [P in keyof T]-?: T[P]; // remove the opt ?
};
export type ResultB = MappedB<Point>;

// use case  - built in
// export type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

export class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ x: 0, y: 123 });
console.log(state.current);
