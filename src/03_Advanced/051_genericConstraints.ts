type NameFields = { firstName: string; lastName: string }; // generic constraint
// a generic identity function of input type 'T' with a generic constraint
function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj, // spread operator
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

// invoke the function -  members are enforced by typescript
// const tom = addFullName({ firstName: "Jones" });  // Error: Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'NameFields'.
const bob = addFullName({ email: "smithb@fake.com", firstName: "Bob", lastName: "Smith" });

// access the members of the original passed in object
console.log(bob.email);
console.log(bob.fullName);
console.log(bob.lastName);

const tina = addFullName({ phone: "555-555-5555", firstName: "Tina", lastName: "Beltcher" });
console.log(tina.phone);
console.log(tina.fullName);
console.log(tina.lastName);
