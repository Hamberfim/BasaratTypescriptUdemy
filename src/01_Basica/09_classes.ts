class Animal {
  // #name - private field es2020 only
  // 'private' accessible in this class only
  // 'protected' accessible in the class or any class that extends this class
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // methods
  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

let cat = new Animal("Cat");
cat.move(10);

// extend class
class Bird extends Animal {
  // methods
  public fly(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
