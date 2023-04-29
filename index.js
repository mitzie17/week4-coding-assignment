
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
 console.log('3. To access the last element of ages array: ages[ages.length - 1]')

//  4. How do you access the first element of any array?
// To access the first element of an array we need to type the first index number of the array inside the brackets, which is always zero.
console.log('4. To access the first element of the ages array: ages[0]')

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = []
for (name of names) {
    nameLengths.push(name.length)
}
console.log(`5. The nameLengths array with the length of each name: ${nameLengths}`)

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumTotal = 0;
for (i = 0; i < nameLengths.length; i++) {
    sumTotal += nameLengths[i]
}
console.log('6. The total sum of the nameLengths array is ' + sumTotal)

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of tiems.
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)

function repeatWord (word, n) {
    let repeatedWord = ''
    for (i = 0; i < n; i++) {
        repeatedWord += word
    }
    return repeatedWord;
}
console.log('7. ' + repeatWord('Hello', 3))

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.

function fullName (firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log('8. fullName function returns ' + fullName('Mitzi', 'Estrada'))

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// 12. Write a function call willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if is hot outside
// and if moneyInPocket is greater than 10.50.

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
