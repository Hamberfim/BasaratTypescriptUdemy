// if typescript can not be sure if a value is null or undefined
type Point = {
  x: number;
  y: number;
};

// create an instance
let point: Point;
// utility function to initialize the instance
function initializeA() {
  point = { x: 0, y: 0 };
}

initializeA();
// it generally better to avoid non-null assertions
console.log("After initialized", point!.x, point!.y); // non-null assertion -> you as the developer are asserting that there is a value!!

// refactored to a preferred format
function initializeB(): Point {
  return { x: 0, y: 0 }; // <==
}

const pointB = initializeB();
// it generally better to avoid non-null assertions
console.log("After initialized", pointB.x, pointB.y);

// example 2
type Person = {
  name: string;
  email?: string | null | undefined;
};

// send an email
function sendEmail(email: string) {
  console.log("Sent email to", email);
}

// utility to check if email in not null - move to inline of the contact function
// function ensureContactable(person: Person) {
//   if (person.email == null) {
//     throw new Error(`Person ${person.email} is not contactable`);
//   }
// }

// function contact(person: Person) {
//   ensureContactable(person);
//   sendEmail(person.email);
// }

// Typescript code flow analysis can now determine that email will be a string
function contact(person: Person) {
  if (person.email == null || person.email == undefined) {
    // throw new Error(`Person ${person.name} is not contactable`);
    console.log(`Person ${person.name} is not contactable via email`);
  } else {
    sendEmail(person.email);
  }
}

let tom: Person = {
  name: "Tom",
};
contact(tom);

let pam: Person = {
  name: "Pam",
  email: "pam@fake.com",
};
contact(pam);

export {};
