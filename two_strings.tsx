/*
<<o>><<o>><<o>>
TWO STRINGS
<<o>><<o>><<o>>

Given two strings, determine if they share a common substring. 
A substring may be as small as one character. 
For each pair of strings, return YES or NO.

*/

function twoStrings(s1: string, s2: string): string {
  let result: string = "NO";
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1.charAt(i))) {
      result = "YES";
    }
  }
  return result;
}

console.log(twoStrings("hello", "world"));
// expected YES
