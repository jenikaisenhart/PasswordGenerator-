// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var number = "0123456789";
var symbol = "!@#$%^&*(){}[]=<>/,."


// Write password to the #password input
function writePassword() { 
 var passwordText = document.querySelector("#password"); 

  var passwordLength = parseInt(prompt("How many characters would you like for your password? 8-128"));

  var userInput= null;
  var randomPassword = "";

  if (passwordLength >= 8 && passwordLength <= 128 == true) {

  var confirmUpperCase = confirm ("Select OK if you would like uppercase letters in your password.");
  var confirmLowercase = confirm ("Select OK if you would like lowercase letters in your password.");
  var confirmSymbol = confirm ("Select OK if you would like a symbol in your password.");
  var confirmNumbers = confirm ("Select OK if you would like numbers in your password.");

  if(confirmUpperCase) {
    userInput += upperCase;
  }
  if(confirmLowercase) {
   userInput += lowerCase;
  }
  if(confirmSymbol) {
    userInput += symbol;
  }
  if(confirmNumbers) {
    userInput = number;
  }
  if (userInput = ! null) {
  
   for (var i = 0; i < passwordLength; i++) {
    randomPassword += userInput.charAT(Math.floor(Math.random() * userInput.passwordLength));
    passwordText.value = randomPassword;
    }
   }
   else {
// error messages 
   passwordText.value = "You must select at least one character set. Click the Generate Password button to try again."
   }

   }else {
    passwordText.value = "Your password length is out of bounds. Click the Generate Password button and select a number between 8 and 128"
   }
  }

  


  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

