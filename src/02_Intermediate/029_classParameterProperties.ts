class Person {
  // properties - move to the constructor
  // public name: string;
  // public age: number;
  //   constructor(name: string, age: number) {
  //     //parameters
  //     this.name = name;
  //     this.age = age;
  //   }

  constructor(public name: string, public age: number) {}
}

const person = new Person("Bill", 42);
console.log(person.name, person.age);

export {};
