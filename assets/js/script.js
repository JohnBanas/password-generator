// Assignment code here
//create a function to prompt for criteria
var characterNumber = function() {
  var num = "";
  while (num >= 8 || num <= 128){
    num = prompt("Choose a number of characters between 8 - 128.");
  }
  console.log(`"You have chosen "` + num + " of characters.");
  return num;
}

var lowerCasePrompt = function() {
  var confirmLowercase = window.confirm("Would you like lowercase characters?");
  if (confirmLowercase) {
    window.alert("You have added lowercase letters.");
  }
}

var upperCasePrompt = function() {
  var confirmLowercase = window.confirm("Would you like uppercase characters?");
  if (confirmLowercase) {
    window.alert("You have added uppercase letters.");
  }
}

var numberPrompt = function() {
  var confirmLowercase = window.confirm("Would you like to add numbered characters?");
  if (confirmLowercase) {
    window.alert("You have added numbered letters.");
  }
}



var lower = charset = 'abcdefghijklmnopqrstuvwxyz';

var upper = charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var number = charset = '0123456789';

var specialCharacter = charset =` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~"`


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
  5)All the prompts are given a valid input
  6)Password generated to match selected criteria
  7)Password should be written in an alert or written to the page.*/
  
  






