/*
<<o>><<o>><<o>>
COUNTING VALLEYS
<<o>><<o>><<o>>

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly "steps" steps, for every step it was noted if it was an uphill, U,
or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
  - A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
  - A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. 

Example:

steps = 8
path = UDDDUDUU

Output: 1

*/

function countingValleys(steps, path) {
  let current_location = 0;
  let valley = false;
  let valleyCount = 0;
  for (var i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      current_location++;
    } else if (path[i] === "D") {
      current_location--;
    }
    if (
      ((current_location === 0 || current_location === -1) &&
        path[i + 1] === "D") ||
      (current_location === -1 && path[i + 1] === "U")
    ) {
      valley = true;
    }
    if (current_location === -1 && path[i + 1] === "U" && valley === true) {
      valleyCount++;
    }
  }
  return valleyCount;
}

console.log(
  countingValleys(
    100,
    "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"
  )
);
// expected 2
