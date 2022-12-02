// object is not mutable but members are
const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
};
console.log(dave);

// error: Cannot assign to 'dave' because it is a constant.
// dave = {
//   name: "dave",
//   role: "drummer",
//   skills: ["drumming", "headbanging"],
// };

// mutable members
dave.name = "dave grohl";
dave.role = "singer";
dave.skills.unshift("singing");
console.log(dave);

// const assertion ' as const'
const daveGrohl = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
} as const;
// Error: Cannot assign to 'name' because it is a read-only property.
// daveGrohl.name = "dave grohl";

console.log(dave);

function layout(settings: { align: "left" | "center" | "right"; padding: number }) {
  console.log("setting layout", settings);
}

const mySettings = {
  align: "left" as const, // without 'as const' error: Types of property 'align' are incompatible. Type 'string' is not assignable to type '"left" | "center" | "right"'.
  padding: 0,
};

layout(mySettings);
