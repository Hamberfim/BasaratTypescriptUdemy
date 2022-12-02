// utility to reverse sort
function reverseSorted1(input: number[]): number[] {
  return input.sort().reverse(); // sort and reverse will mutate an array
}

const startNums1 = [10, 11, 12, 13, 14, 15];
const revSortResult1 = reverseSorted1(startNums1);
console.log(revSortResult1);
console.log(startNums1); // displays already sorted because it mutated the array

function reverseSorted2(input: readonly number[]): number[] {
  return input.slice().sort().reverse(); // use slice to create a copy first otherwise sort and reverse will not be available for 'input'
}

const startNums2 = [10, 11, 12, 13, 14, 15];
const revSortResult2 = reverseSorted2(startNums2);
console.log(revSortResult2);
console.log(startNums2); // no longer mutated

type Neat = readonly number[];
type Long = ReadonlyArray<number>;

// tuple
type PointInSpace1 = [number, number]; // tuple representing a point in space
function movePoint(point: PointInSpace1, x: number, y: number): PointInSpace1 {
  point[0] += x;
  point[1] += y;
  return point;
}

const point: PointInSpace1 = [0, 0];
const move = movePoint(point, 5, 5);

console.log(move);
console.log(point); // mutated

type PointInSpace2 = readonly [number, number]; // tuple representing a point in space
function movePoint2(point: PointInSpace2, x: number, y: number): PointInSpace2 {
  return [point[0] + x, point[1] + y];
}

const point2: PointInSpace2 = [0, 0];
const move2 = movePoint2(point2, 7, 7);

console.log(move2);
console.log(point2); // NOT mutated
