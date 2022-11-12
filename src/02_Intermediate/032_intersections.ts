// similar to inheritance via combining the feature of any two given types
type Point2D = {
  x: number;
  y: number;
};

// Point3D has all the members of Point2D by adding the 'Point2D &'
type Point3D = Point2D & {
  // x: number;  // intersects
  // y: number;  // intersects
  z: number;
};

type Person = {
  firstName: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

// intersection of the three
type Details = Person & Email & Phone;

// utility function
function contact(details: Details) {
  console.log(`
    Dear ${details.firstName},
    I hope you received our email at ${details.email}.
    We will call you shortly at ${details.phone}
    `);
}

contact({
  firstName: "Tom",
  email: "tom@fakeemail.com",
  phone: "555-555-5555",
});

export {};
