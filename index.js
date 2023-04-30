
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// * SOLUTION *
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 

// * SOLUTION *
let subtraction = ages[ages.length - 1] - ages[0]
console.log('1a. ' + subtraction)

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

// * SOLUTION *
ages.push(50)
let subtraction2 = ages[ages.length - 1] - ages[0]
console.log('1b. ' + subtraction2)

// 1c.Use a loop to iterate through the array and calculate the average age

// * SOLUTION *
let sum = 0;
for (i=0; i < ages.length; i++) {
    sum += ages[i];
}
let avg = sum / ages.length
console.log('1c. Average age is ' + avg)

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

// * SOLUTION *
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.

// * SOLUTION *
let sumLetters = 0
for (name of names) {
    sumLetters += name.length;
}

let average = sumLetters / names.length;
console.log('2a. Average number of letters per name is ' + average)

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

// * SOLUTION *
let allNames = ''
for (name of names) {
    allNames += name + ' '
}
console.log('2b. ' + allNames)

// 3. How do you access the last element of any array?

// * SOLUTION *
// To access the last element of an array, you can call the lenght property on the array and subtract one.
// The length property will return the number of items in the array but because arrays are zero-indexed, that is the first index in the array is zero,
// we would need to subtract one to get the last item/element.
 console.log('3. To access the last element of ages array: ages[ages.length - 1]')

//  4. How do you access the first element of any array?

// * SOLUTION *
// To access the first element of an array we need to type the first index number of the array inside the brackets, which is always zero.
console.log('4. To access the first element of the ages array: ages[0]')

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// * SOLUTION *
let nameLengths = []
for (name of names) {
    nameLengths.push(name.length)
}
console.log(`5. The nameLengths array with the length of each name: ${nameLengths}`)

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

// * SOLUTION *
let sumTotal = 0;
for (i = 0; i < nameLengths.length; i++) {
    sumTotal += nameLengths[i]
}
console.log('6. The total sum of the nameLengths array is ' + sumTotal)

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of tiems.
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)

// * SOLUTION *
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

// * SOLUTION *
function fullName (firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log('8. fullName function returns ' + fullName('Mitzi', 'Estrada'))

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// * SOLUTION *
function isGreaterThan100(array) {
    let sumTotal = 0;
    for (i = 0; i < array.length; i++) {
        sumTotal += array[i]
    }
    if (sumTotal > 100) {
        return true
    }
        return sumTotal
}

console.log('9. ' + isGreaterThan100(ages))

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

// * SOLUTION *
function averageOfElements(array) {
    let sumOfElements = 0;
    for (i = 0; i < array.length; i++) {
        sumOfElements += array[i]
    }
    let avgOfElements = sumOfElements / array.length
    return avgOfElements
}

console.log('10. ' + averageOfElements(ages))

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// * SOLUTION *
// Created another ages array (ages2) to compare its average with the first ages array to check if function worked.
let ages2 = [30, 20, 7, 25, 55]

function isFirstArrayAvgGreater (arr1, arr2) {
    let arr1Sum = 0;
    let arr2Sum = 0;
    for (i = 0; i < arr1.length; i++) {
        arr1Sum += arr1[i]
    }
    for (i = 0; i < arr2.length; i++) {
        arr2Sum += arr2[i]
    }

    let arr1Average = arr1Sum / arr1.length
    let arr2Average = arr2Sum / arr2.length

    if (arr1Average > arr2Average) {
        return true
    } else {
        return false
    }
}
console.log('11. ' + isFirstArrayAvgGreater(ages, ages2))

// 12. Write a function call willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if is hot outside
// and if moneyInPocket is greater than 10.50.

// * SOLUTION *
let isHotOutside = true;
let moneyInPocket = 9;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.5) {
        return true
    }
    return false
}
console.log('12. ' + willBuyDrink(isHotOutside, moneyInPocket))

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// * SOLUTION *
// For this problem, I created an array of numbers (arrayOfNumbers) containing duplicates, which as the name implies, the function removeDuplicates() 
// will return a new array without any duplicates. I created this function because I wanted to see how the filter() method works. After doing some research,
// on how to solve this problem, I would also have to use the indexOf() method.

let arrayOfNumbers = [5, 19, 23, 5, 13, 50, 74, 23, 13]

function removeDuplicates(arr) {
// I started by aplying the filter() method to the array and saving the returned array in the variable uniqueNumbers.
// Here the filter() takes the first element in the array (num) and the index of that element.
    let uniqueNumbers = arr.filter((num, index) => {
// As the filter() method processes each element in the array, the element (num) is passed into the indexOf() method. The indexOf() returns the first
// index at which the a given element is found in the array. In this example, 5 is found at index 0, 19 at index 1, and so on. However, duplicate numbers
// will have a different index than their indexOf value. With that the filter() method can then be use to include numbers whose indexes match their indexOf values,
// and a new array without duplicates will be returned.
        return arr.indexOf(num) === index;
    } )
    return uniqueNumbers
}
console.log('13. Original array with duplicates: ' + arrayOfNumbers)
console.log('New array without duplicates: ' + removeDuplicates(arrayOfNumbers))

