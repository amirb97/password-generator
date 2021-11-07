// Assignment code here
// strings to store each character type
let nums = "0123456789";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialChars = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

// string to be used to store all possible chars
let possibleChars = "";

// initializes passLength as a global variable to be used in a function, and returned from that function
let passLength;

// function to get the desired password length from the user
function passwordLength(){
  passLength = window.prompt("How many characters does the password need to be?(8-128 inclusive)");

  // if loop ensures the password will be a length within the given criteria
  if(passLength >= 8 && passLength <= 128){
    return passLength;
  } else {
    alert("You entered a numbers that was greater than 128 or less than 8.  Please enter a number between 8 and 128.");
    passwordLength();
  }
}

// calls the function to get the desired password length
passwordLength();
passwordChars();

// function to ask the user what character types are desired for the password
function passwordChars(){
  // if statements check if certain characters should be included in the password
  if(confirm('Should the password contain numbers?')){
    possibleChars = possibleChars.concat(nums);
  }
  
  if(confirm('Should the password contain lower case letters?')){
    possibleChars = possibleChars.concat(lowerLetters);
  }
  
  if(confirm('Should the password contain upper case letters?')){
    possibleChars = possibleChars.concat(upperLetters);
  }
  
  if(confirm('Should the password contain special characters?')){
    possibleChars = possibleChars.concat(specialChars);
  }

  // if statement checks to make sure atleast one character type was selected
  if(possibleChars != ""){
    return possibleChars;
  } else {
    alert("You didn't select any of the possible character types. Please select at least one type.");
    passwordChars();
  }
}

// function to generate and return the password as a string
function generatePassword(){
  let password = '';

  // loops through the same number of times as the length of the desired password
  for (let i = 0; i < passLength; i++){
    // concatenates the password one character at a time by randomly picking a character in the possibleChars string
    password = password.concat(possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)));
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);