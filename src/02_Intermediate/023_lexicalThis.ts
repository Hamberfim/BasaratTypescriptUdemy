class Person {
  private _age: number;

  constructor(_age: number) {
    // 'this' class calling context scope
    this._age = _age;
  }

  growOlder() {
    // 'this' class calling context scope
    this._age++;
  }

  // makeYounger as a property (not a method) pointing to an arrow function, because the property is executed at the end of the constructor
  // so it's bound to whatever instance is present within the constructor and no longer driven by the calling context
  makeYounger = () => {
    // 'this' lexical scope
    this._age--;
  };

  age() {
    // 'this' class calling context scope
    return this._age;
  }
}

const person = new Person(0);
person.growOlder(); // // 'this' class calling context scope
person.growOlder(); // // 'this' class calling context scope
//setTimeout(person.growOlder(), 1000); // this calling scope is lost when invoked later - would be the same as calling growOlder();

console.log("Age: " + person.age());
// locally scoped 'this' with an arrow function since it's a property pointing to an arrow function
setTimeout(person.makeYounger);
setTimeout(() => console.log("Age: " + person.age(), 2000));
