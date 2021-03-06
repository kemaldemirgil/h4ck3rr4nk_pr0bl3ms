/*
<<o>><<o>><<o>>
MARK AND TOYS
<<o>><<o>><<o>>

Mark and Jane are very happy after having their first child. 
Their son loves toys, so Mark wants to buy some. 
There are a number of different toys lying in front of him, tagged with their prices. 
Mark has only a certain amount to spend, 
and he wants to maximize the number of toys he buys with this money. 
Given a list of toy prices and an amount to spend, 
determine the maximum number of gifts he can buy.

*/

function maximumToys(prices: number[], k: number): number {
  let total: number = 0;
  let count: number = 0;
  prices.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] + total <= k) {
      total += prices[i];
      count++;
    }
  }
  return count;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
// expected 4
