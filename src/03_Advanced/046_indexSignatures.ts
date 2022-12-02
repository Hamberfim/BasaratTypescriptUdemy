const myStrings = {
  // members
  hello: "Hello",
  world: "World",
  color: "blue",
  distance: 125,
};

// using string index to access the members
console.log(myStrings["color"]);
console.log(myStrings["distance"]);

const numStrings = {
  1337: "leet",
  h4ck1ng: "hacking",
  n00b: "beginner",
};

// index signature
type Dictionary = {
  [key: string]: boolean;
};

// example
type Person = {
  fullName: string;
  email: string;
};

// index signature
type PersonDictionary = {
  [fullName: string]: Person | undefined;
};

const persons: PersonDictionary = {
  // js object literals
  tom: { fullName: "Tom Smith", email: "smitht@fake.com" },
  sarah: { fullName: "Sarah Jones", email: "joness@fake.com" },
  sue: { fullName: "Sue Seashell", email: "seashells@fake.com" },
};
// assigning to a key
persons["bill"] = { fullName: "Bill Wright", email: "wrightb@fake.com" };

console.log(persons);

// using string index to access the members
console.log(persons["tom"]);
console.log(persons["tom"]?.email); // possible that it's undefined

// delete a value via it's string index
delete persons["sue"];
console.log(persons);

export {};
