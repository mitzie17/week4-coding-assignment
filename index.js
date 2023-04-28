
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 

let subtraction = ages[ages.length - 1] - ages[0]
console.log(subtraction)

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

let newAges = ages.push(50)
console.lo
let newSubtraction = newAges[newAges.length - 1] - newAges[0]
console.log(newSubtraction)

//Use a loop to iterate through the array and calculate the average age