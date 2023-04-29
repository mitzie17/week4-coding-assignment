
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 

let subtraction = ages[ages.length - 1] - ages[0]
console.log('1a. ' + subtraction)

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(50)
let subtraction2 = ages[ages.length - 1] - ages[0]
console.log('1b. ' + subtraction2)


// 1c.Use a loop to iterate through the array and calculate the average age
let sum = 0;
for (i=0; i < ages.length; i++) {
    sum += ages[i];
}
let avg = sum / ages.length
console.log('1c. Average age is ' + avg)

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
let sumLetters = 0
for (name of names) {
    sumLetters += name.length;
}

let average = sumLetters / names.length;
console.log('2a. Average number of letters per name is ' + average)


// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let allNames = ''
for (name of names) {
    allNames += name + ' '
}
console.log('2b. ' + allNames)

// 3. How do you access the last element of any array?

//  4. How do you access the first element of any array?

//


