// literal type - strings
// let directions: "North" | "South" | "East" | "West";
// extract the union into a type alias
type CardinalDirections = "North" | "North-East" | "East" | "South-East" | "South" | "South-West" | "West" | "North-West"; // directions expanded clockwise
let directions: CardinalDirections;

function movement(distance: number, direction: CardinalDirections): void {
  console.log(`Moving ${distance} feet towards the ${direction}`);
}

movement(3, "North-East");

// literal types - numbers
type DiceValues = 1 | 2 | 3 | 4 | 5 | 6;
function diceRoll(): DiceValues {
  return (Math.floor(Math.random() * 6) + 1) as DiceValues;
}

const firstRoll = diceRoll();
console.log(`Dice roll is ${firstRoll}`);
