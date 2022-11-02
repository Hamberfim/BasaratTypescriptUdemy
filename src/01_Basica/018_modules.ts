/**
 *  @returns true if the input is a palindrome
 */
export function isPalindrome(str: string): string {
  // output original for reference
  console.log("Input: " + str);
  // remove spaces
  let strReplaceSpace = str.replace(" ", "");
  // output with spaces removed for reference
  console.log("Input with spaces removed: " + strReplaceSpace);
  // split each letter, reverse letters, join letters together
  let strSplitJoin = strReplaceSpace.split("").reverse().join("");
  // output original for reference
  console.log("Input reversed: " + strSplitJoin);
  // compare the two
  let isSame = strReplaceSpace === strSplitJoin;
  return `Are they the same? ${isSame}`;
}

// moved to import file
// console.log(isPalindrome("taco cat"));
// console.log(isPalindrome("nurses run"));
// console.log(isPalindrome("pizza pie"));
