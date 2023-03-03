type Size = "small" | "medium" | "large" | (string & {});
type Padding = Size;

function getPadding(padding: Padding): string {
  if (padding === "small") {
    return "12px";
  }
  if (padding === "medium") {
    return "16px";
  }
  if (padding === "large") {
    return "20px";
  }
  return padding;
}

let padding: Padding;
padding = "small";
padding = "8px";
padding = ""; // auto complete is available

export {};
