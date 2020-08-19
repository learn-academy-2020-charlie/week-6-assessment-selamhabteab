// ASSESSMENT 6: Coding Practical Questions


//(1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// My psuedocode: (1) Map through the array to capitalize name. (2) Concatenate name with occupation. 
const createSen = (array) => {
  let capName = array.map(value => {
    value.name.charAt(0).toUpperCase() + name.slice(1)
  })
  // encountered an error that needs more time for a solution but I took the time to understand the class answer. 
}
console.log(createSen(people))
//Class answer:
//Capitalizing the names 
//Map through the array
//Slice the fist letter off, save to variable
//Slice the rest of the word, save to variable
//String interpolation into a new variable
//Joined together with first and last name
//Interpolated the capitalized names with occupation
//Created an empty array
//For loop
//Interpolated the sented with cap names and occupation
//Pushed into new array
//Returned final sentence array
const sentenceGenerator = (array) => {
  let capName = array.map(value => {
    let separatedName = value.name.split (" ")
    return separatedName.map(value => {
      let firstLetter = value.slice(0,1).toUpperCase()
      let restOfWord = value.slice(1)
      return firstLetter+restOfWord
    }).join (" ")
    })
    let finalSentence = []
    for (let i=0; i<array.length; i++){
      finalSentence.push(`${capName[i]} is a ${array[i].occupation}.`)
    }
    return finalSentence
}

console.log(sentenceGenerator(people))

//(2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//Class answer: Create a function that takes in an array
//Create a variable that holds an empty array
//Create a for loop that'll hold a conditional
//If the typeof array[i] is a number
//Push into empty array
//Use a map to iterate through the array
//Return the value of modulo 3

const remainder = (array) => {
  let numsOnly = []
  for (let i=0; i<array.length; i++) {
    if (typeof (array[i]) === "number"){
      numsOnly.push(array[i])
    }
  }
  return numsOnly.map(value => {
    return value % 3
  })
}
console.log(remainder(testingArray1))
console.log(remainder(testingArray2))


//(3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//Class answer:

const noDups = (array1, array2) => {
return array1.concat(array2).filter((value, index, array) => {
  return index == array.indexOf(value)
})
}
console.log(noDups(testingArray3, testingArray4));
