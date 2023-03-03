// object literal - car
const car = {
  make: "Ford",
  model: "Mustang",
  year: 1966,
};

// generate a type from your code base
type Car = typeof car;

const amc: Car = {
  make: "AMC",
  model: "Pacer",
  year: 1979,
};

// inline type definition
const nissan: typeof car = {
  make: "Nissan",
  model: "Vera",
  year: 2016,
};

// JSON response
const contact = { firstName: "Bob", lastName: "Smith", email: "smithb@fake.com" };
const contactToJSON = JSON.stringify(contact);
console.log(contactToJSON);

// parse it back to obj as if it was a JSON response
const personResponseObj = JSON.parse(contactToJSON);

// use the parsed JSON as type
type PersonResponse = typeof personResponseObj;
function processResponse(contact: PersonResponse) {
  console.log(`Contact: ${contact.firstName} ${contact.lastName}, ${contact.email}`);
}

processResponse(personResponseObj);
