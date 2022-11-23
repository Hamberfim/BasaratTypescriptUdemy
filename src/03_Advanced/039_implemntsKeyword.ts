// using the implements keyword
type Animal = {
  name: string;
  voice(): string;
};

function log(animal: Animal) {
  console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class Cat implements Animal {
  constructor(public name: string) {}
  voice(): string {
    return "meow";
  }
}

class Dog implements Animal {
  constructor(public name: string) {}
  voice(): string {
    return "bark";
  }
}

log(new Cat("Poo'yee"));
log(new Dog("Sukha"));

export {};
