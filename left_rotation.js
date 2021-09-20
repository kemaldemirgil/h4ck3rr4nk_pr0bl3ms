/*
<<o>><<o>><<o>>
LEFT ROTATION
<<o>><<o>><<o>>

A left rotation operation on an array shifts each of the array's elements unit to the left. For example, if left rotations are performed on array , then the array would become
.Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
Given an array
of integers and a number, , perform left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
*/

function rotLeft(a, d) {
  while (d !== 0) {
    a.push(a.shift())
    d--
  }
  return a
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))
// expected [5, 1, 2, 3, 4]