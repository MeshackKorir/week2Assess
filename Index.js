// Given a string return a new string with the reversed order of characters

function reverseThisString(theInput) {
     //I'll use the chaining method connecting the word then reverse then split
    return theInput.split("").reverse().join("");
}

let originalWord = "teach2give Is fantastic";
let reversedString = reverseThisString(originalWord);
// console.log(reversedString);


// write a function that count the number of vowels in a sentence

function vowelCount(sentence)  {

    const vowels = "aeiou"

    const vowelArray = sentence.split("").filter(char => vowels.includes(char))

    return vowelArray.length;


}

let sentence = "MeshackKorir"
let count = vowelCount(sentence);

console.log(count)

//  Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers  


