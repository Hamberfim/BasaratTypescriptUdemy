// dice
// let dice: number;
let dice!: number; // !  definite assignment assertion

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}
rollDice();
//console.log("Non-Null Assertion - dice value", dice!);
console.log("dice value", dice);

class Point {
  x!: number; // !  definite assignment assertion
  y!: number; // !  definite assignment assertion

  constructor() {
    this.moveRandom();
  }

  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}

export {};
