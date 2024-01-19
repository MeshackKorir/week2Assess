
    //{ Question 1 }
// Given a string return a new string with the reversed order of characters
function reverseThisString(theInput) {
     //I'll use the chaining method connecting the word then reverse then split
    return theInput.split("").reverse().join("");
}

let originalWord = "teach2give Is fantastic";
let reversedString = reverseThisString(originalWord);
// console.log(reversedString);


    //{ Question2 }
// write a function that count the number of vowels in a sentence

function vowelCount(sentence)  {

    const vowels = "aeiou"

    const vowelArray = sentence.split("").filter(char => vowels.includes(char))

    return vowelArray.length;


}

let sentence = "MeshackKorir"
let count = vowelCount(sentence);

// console.log(count)

    // { Question 3 }
//  Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers  

const readline = require('readline');


let userInputs = prompt("Enter numbers seperating it with Commas")

let numbersArray = userInputs.split(",")

let numberArray = numbersArray.map(Number);

let sum = numberArray.reduce((accumilator, number) => accumilator + number, 0);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// console.log("Sum of the numbers:", sum)


// Question 4

//  PALINDROME –A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward  
// Write a program that checks whether a word is a palindrome or not.  
// Examples of a palindromes  
// (race car) 

function palindrome(theWord) {
    let reversedWord = theWord.split('').reverse('').join('');
    if(reversedWord == theWord){
        return (`${theWord} is a palindrome`)
    } else {
        return (`${theWord} is not a palindrome`)
    }

}

// console.log(palindrome("civic"))            


// { Question 5 }

// Given an array and chunk size divide the array into subarrays where each subarray is of length is the chunk size. 

function ChunkArray (array, chunkSize){

    let Array = [];

    // Looping through the array

    for (let i = 0; i < array.length; i += chunkSize) {
        // I have used slice to extract a chunk of the array
        let chunk = array.slice(i, i + chunkSize);
        
        Array.push(chunk);
    }

    return Array;

}

let currentArray = [9,8,7,6,5,4,3,2,1];
let chunkSize = 3;
let subarrays = ChunkArray(currentArray, chunkSize);

// console.log(subarrays)

    //{ Question 6 }
//  Given an integer, return an integer that is reverse ordering the numbers 


function reverseInteger(num) {
    const reversedString = num.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);

    return reversedNumber;
}


let theNumber = 12345;
let reversedNumber = reverseInteger(theNumber);


console.log(reversedNumber);




