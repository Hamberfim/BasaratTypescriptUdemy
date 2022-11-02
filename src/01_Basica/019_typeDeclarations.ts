// accessing environment variables within nodejs is by using 'process.env'

// Using the declare keyword before declaring the variable without any implementation because its a definition, not a declaration
// declare const process: any; // moved to a declaration file --> env.d.ts

// logs out the logged in user
console.log("Logged in user: ", process.env.USER); // <--- requires npm i @types/node with a the above declaration file which installs the process.d.ts definitions

// use some of the built in modules of the process definitions
import fs from "fs";
fs.writeFileSync("./src/testWriteHello.txt", "Hello - test write file successful!");
