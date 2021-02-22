// Assignment code here

//variables for criteria
var caseLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var caseUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var number = ["0","1","2","3","4","5","6","7","8","9"];

var specChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",'\\'];

//function to generate password
function generatePassword() {
//create a function to prompt for criteria
var charNumber = function() {
  var num = "";
  while (num < 8 && num > 128 ){
    num = prompt("Choose a number of characters between 8 - 128.");
  }
  if (num >= 8 || num <= 128) {
  console.log("You have chosen " + num + " of characters.");
  }
  return charNumber(num);
  }

  var loCasePrompt = function() {
  var confirmLowercase = prompt("Would you like lowercase characters?");
  if (confirmLowercase) {
    alert("You have added lowercase characters.");
  }
  (loCasePrompt(lower));
  }

  var upCasePrompt = function() {
  var confirmLowercase = prompt("Would you like uppercase characters?");
  if (confirmLowercase) {
    alert("You have added uppercase characters.");
  }
  upCasePrompt(upper);
  }

  var numPrompt = function() {
  var confirmLowercase = prompt("Would you like to add numbered characters?");
  if (confirmLowercase) {
    alert("You have added numbered characters.");
  }
  numPrompt(number);
  }

  var specCharacter = function() {
  var confirmSpecialCharacter = prompt("Would you like to add special characters?");
  if (confirmSpecialCharacter) {
    alert("You have added special characters.");
  }
  specCharacter(specialCharacter);
  }
};

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


/* Create new secure password:
 1) When button is clicked it prompts the user with a series of criteria
 2) When prompted for criteria, user selects which options to include in password creation
 3) criteria includes:  
  
    a) Length of password
      1) at least 8 characters, no more than 128
    b) when prompted for character type, user can select(include one or multiple):
      1)lowercase
      'abcdefghijklmnopqrstuvwxyz'
      2)uppercase
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      3)numeric
      '0123456789'
      4)special characters
      INCLUDE SPACEBAR  " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
  4) After answering each prompt input should be validated and at least one input type should be selected
  5) All the prompts are given a valid input
  6) Password generated to match selected criteria
  7) Password should be written in an alert or written to the page.*/
  
  






