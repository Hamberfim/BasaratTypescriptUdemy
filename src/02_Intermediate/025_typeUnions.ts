/**
 * @param input a command or an array of commands
 * @returns a single trimmed string
 */
function formatCommandLine(input: string | string[]) {
  let line = "";
  if (typeof input == "string") {
    line = input.trim();
  } else {
    line = input.map((x) => x.trim()).join(" ");
  }
  return line;
}

console.log(formatCommandLine(" hello "));
console.log(formatCommandLine([" hello ", "  world  "]));

/**
 * Takes a string and adds 'padding' to the left.
 * If padding is a number, the that number of  spaces is added to the left
 * if 'padding is a string, then 'padding' is appended to the left
 */
// extracted union type alias-->  type PaddingLeft = number | string;
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected number or string, got '${padding}'.`);
}

let runPadding = padLeft("HI, Hercules.", 5);
console.log(runPadding);
runPadding = padLeft("HI, Hercules.", "###  ");
console.log(runPadding);
// runPadding = padLeft("HI, Hercules.", false);  // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

export {};
