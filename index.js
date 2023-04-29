
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
// To access the last element of an array, you can call the lenght property on the array and subtract one.
// The length property will return the number of items in the array but because arrays are zero-indexed, that is the first index in the array is zero,
// we would need to subtract one to get the last item/element.
 console.log('To access the last element of ages array: ages[ages.length - 1]')

//  4. How do you access the first element of any array?
// To access the first element of an array we need to type the first index number of the array inside the brackets, which is always zero.
console.log('To access the first element of the ages array: ages[0]')

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = []
for (name of names) {
    nameLengths.push(name.length)
}
console.log(`New array with the length of each name: ${nameLengths}`)



