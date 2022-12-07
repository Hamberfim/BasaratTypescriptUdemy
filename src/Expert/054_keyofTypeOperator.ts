type Person = {
  name: string;
  age: number;
  location?: string;
};
type PersonKeys = keyof Person;

const tommy: Person = {
  name: "Tommy Callahan",
  age: 28,
  location: "Sandusky, Ohio",
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

const age = logGet(tommy, "age");
logGet(tommy, "location");
// console.log(logPerson(tommy, "email"));

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) {
  console.log("Setting:", key, value);
  obj[key] = value;
}

logSet(tommy, "age", 32);
logGet(tommy, "age");

export {};
