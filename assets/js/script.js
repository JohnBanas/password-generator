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



//variables for criteria

var caseLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var caseUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var number = ["0","1","2","3","4","5","6","7","8","9"];

var specChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",'\\'];

var mainArray = [];

var passwordLength = [];

//number of characters in password function
function passLength() {

  num = prompt("Choose a number of characters for your password between 8 - 128.");
  if (num < 8 || num > 128 || isNaN(num) === true) {
    window.alert("Please choose between 8 - 128.");
    passLength();
  }
  passwordLength = num;
}


var allArrayContainer = function() {
  //confirm lowercase
  var confirmLowercase = window.confirm("Would you like lowercase characters, click 'OK' for YES or click 'CANCEL' for NO.");

  if (confirmLowercase) {
    mainArray = mainArray.concat(caseLower);
  }
  //confirm uppercase

  var confirmUppercase = window.confirm("Would you like uppercase characters, click 'OK' for YES or click 'CANCEL' for NO.");

  if (confirmUppercase) {
    mainArray = mainArray.concat(caseUpper);
  }
  
  //confirm numbers

  var confirmNum = confirm("Would you like to add numbered characters, click 'OK' for YES or click 'CANCEL' for NO.");

  if (confirmNum) {
    mainArray = mainArray.concat(number);
  }
  
  //confirm special characters

  var confirmSpecialCharacter = window.confirm("Would you like to add special characters, click 'OK' for YES or click 'CANCEL' for NO.");

  if (confirmSpecialCharacter) { 
    mainArray = mainArray.concat(specChar);
  }

  //make sure they select at least one option
  if (confirmLowercase === false && confirmUppercase === false && confirmNum === false && confirmSpecialCharacter === false ) {
    window.alert("Please choose at least one type of character choice.");
    allArrayContainer();
  }
  //end of queries. 
  
}

//function to generate password
var generatePassword = function() {

  //a container for the random password array
  let prePassword = [];
  

  //call the number of the password
  passLength();
  //call function to prompt for criteria
  allArrayContainer();

  //create function to use number of characters and call generatePassword to random characters
  for (let i=0; i < passwordLength; i++){
  //random selection from array
  let randomCharacter = mainArray[Math.floor(Math.random() * mainArray.length)];
  prePassword = prePassword.concat(randomCharacter);   
  }
 console.log(prePassword);
  //take a random array items and turn into string for final password
  var finalPassword = prePassword.join(' ');
  console.log(finalPassword);
  return finalPassword;
  
};    




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
  
  






