// Assignment code here

// arrays to store each character type
const nums = [
  "0","1","2","3","4","5","6","7","8","9"
];
const lowerLetters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];
const upperLetters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
const specialChars = [
  " ","!",'"',"#","$","%","&","'","(",")","*",
  "+",",","-",".","/",":",";","<","=",">","?",
  "@","[","]","^","_","`","{","|","}","~"
];

var passLength = window.prompt("How many characters does the password need to be?(8-128 inclusive)");

// initializes 4 boolean variables
let hasNums,hasLowerLetters,hasUpperLetters,hasSpecialChars;

// if statements check if certain characters should be included in the password
if(confirm('Should the password contain numbers?')){
  hasNums = true;
} else {
  hasNums = false;
}

if(confirm('Should the password contain lower case letters?')){
  hasLowerLetters = true;
} else {
  hasLowerLetters = false;
}

if(confirm('Should the password contain upper case letters?')){
  hasUpperLetters = true;
} else {
  hasUpperLetters = false;
}

if(confirm('Should the password contain special characters?')){
  hasSpecialChars = true;
} else {
  hasSpecialChars = false;
}

// function to generate and return the password as a string
function generatePassword(){
  return hasNums;
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