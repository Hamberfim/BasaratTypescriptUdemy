type Roles = "admin" | "owner";

// creating a record
let peopleWithRoles: Record<Roles, string[]> = {
  owner: ["jane", "Sam", "Karl"],
  admin: ["Rich"],
};

const owners: string[] = peopleWithRoles["owner"];
const admins: string[] = peopleWithRoles["admin"];
console.log("Owners:", owners);
console.log("Admins:", admins);

// creating a record
type SomePersons = Record<string, { name: string; role: Roles }>;
const persons: SomePersons = {};
persons["000"] = { name: "John", role: "admin" };
persons["001"] = { name: "Mary", role: "owner" };
persons["002"] = { name: "Tom", role: "owner" };

// as apposed to a verbose syntax
type VerbosePerson = { [key: string]: { name: string; role: Roles } };
const verPersons: VerbosePerson = {};
verPersons["003"] = { name: "Larry", role: "admin" };

// simple object from a record
// type PageInfo = {
//   id: string;
//   title: string;
// };

type PageInfo = Record<"home" | "service" | "about" | "contact", { id: string; title: string }>;
