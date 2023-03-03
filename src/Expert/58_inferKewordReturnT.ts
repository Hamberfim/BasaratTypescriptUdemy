type IsArray<T> = T extends Array<any> ? "array" : "other";

type IsItAnArray = IsArray<string[]>;
type IsNotArray = IsArray<boolean>;

type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxedStringArray = UnboxArray<string[]>;
type UnboxedNumberArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<number>;

export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };
}

// type ReturnType<T> = T extends (...args: any) => infer R ? R : never;
// type Person = ReturnType<typeof createPerson>;

// function logPerson(person: Person) {
//   console.log("Person:", person.firstName, person.lastName, person.fullName);
// }

// shorten since ReturnType<typeof createPerson> is built in
function logPerson(person: ReturnType<typeof createPerson>) {
  console.log("Person:", person.firstName, person.lastName, person.fullName);
}
