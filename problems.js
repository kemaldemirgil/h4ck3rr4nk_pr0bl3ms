/*
<<o>><<o>><<o>>
SALES BY MATCH
<<o>><<o>><<o>>

There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example:
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2. 
*/

function sockMerchant(n, ar) {
  let pairs = 0;
  let count = 0;
  let copy = [];
  ar.forEach((x) => {
    if (!copy.includes(x)) {
      copy.push(x);
      for (var i = 0; i < ar.length; i++) {
        if (ar[i] === x) {
          count++;
        }
      }
      if (count > 1 && count / 2) {
        pairs += Math.floor(count / 2);
      }
    }
    count = 0;
  });
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// expected 3
