/*
<<o>><<o>><<o>>
JUMPING ON THE CLOUDS
<<o>><<o>><<o>>

There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. 
The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
- For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. 

Example:

c = [0, 0, 1, 0, 0, 1, 0]
Output: 4
*/

function jumpingOnClouds(c) {
  let jump = 0;
  for (var i = 0; i < c.length; i++) {
    if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 0) {
      i++;
      jump++;
    } else if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] !== 0) {
      jump++;
    } else if (c[i] === 0 && c[i + 1] !== 0 && c[i + 2] === 0) {
      i++;
      jump++;
    }
  }
  return jump;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
// expected 3
