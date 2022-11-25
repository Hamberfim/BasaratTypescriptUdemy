type Person = {
  name: string;
  dateOfBirth?: Date;
};

// used in tests not application code
// assertion functions - return type: assert 'some-condition' and only returns 'if the condition is true'
function assertPerson(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
// used in tests not application code
function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) {
    return;
  } else {
    throw new TypeError("value is not a Date");
  }
}

function loadPerson() {
  let person: Person;
  if (Math.random() > 0.5) {
    return (person = { name: "Lynda", dateOfBirth: new Date("May 28, 1969") });
  } else {
    return null;
  }
}

const mightBePerson = loadPerson();

assertPerson(mightBePerson != null, "Could not load person");
assertDate(mightBePerson.dateOfBirth);

console.log("Name:", mightBePerson.name);
console.log("Birth Date:", mightBePerson.dateOfBirth.toISOString());

export {};
