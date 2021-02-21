// Assignment code here


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
      2)uppercase
      3)numeric
      4)special characters
  
  4) After answering each prompt input should be validated and at least one input type should be selected
  5)All the prompts are given a valid input
  6)Password generated to match selected criteria
  7)Password should be written in an alert or written to the page.*/
  
  






