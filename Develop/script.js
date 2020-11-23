// variable for numbers
// variable for special characters (quotes for this one)
// variable for lowercase - can do one for alpha then split the array ( lcArray = alpha.split() )
// variable for uppercase
// split at each index for lowercase and uppercase .split
// varpasswordOptions = []
// var passLength = prompt ("How many characters would you like?")

//create event for pushing button and creating a prompt
//Prompt should ask how many characters do you want to use (5-128)
//confrm alert for upper case letters (if statment with true & false leading to the same next step)
//confirm alert for lower case letters
//confirm alert for characters
//confirm alert for numbers
//ones through all the prompts - password is added into text area box


var lowerCaseEl = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","u","r","s","t","u","v"];
var upperCaseEl = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numEl = ["1","2","3","4","5","6","7","8","9","10"];
var charEl = ["!","@","#","$","%","^","&","*","?","~"];
var passwordOptions = [];
var finalPassword = "";
var button = document.querySelector ("#genPass");
var insertPass = document.querySelector ("#insertPass");




button.addEventListener ("click", randomPassword);


function randomPassword () {

  document.querySelector ("#genPass");
 
  var askPass = confirm ("Do you want to create a Password?");

  if (askPass) {
    var passLength = prompt ("How long should your password be? (Please pick between 6 and 128)");
    

    if (passLength > 6 && passLength < 128) {

      var addLowerCase = confirm ("Do you want add lower case letters?");
      var addUpperCase = confirm ("Do you want to add upper case letters?");
      var addNumbers = confirm ("Do you want to add Numbers?");
      var addCharcs = confirm ("Do you want to add special characters?");

    } else {

      alert ("Choose a number between 6 and 128!"); 
    
    } if (addLowerCase === true && addUpperCase === true && addNumbers === true && addCharcs === true) {

      var lowerUpper = lowerCaseEl.concat (upperCaseEl);
      var numLetters = lowerUpper.concat (numEl);
      passwordOptions = numLetters.concat (charEl);
      console.log (passwordOptions);

    } if (addLowerCase === false && addUpperCase === true && addNumbers === true && addCharcs === true) {

      var upperOnly = upperCaseEl.concat(numEl);
      passwordOptions = upperOnly.concat(charEl);
      console.log (passwordOptions);

    } if (addLowerCase === false && addUpperCase === false && addNumbers === true && addCharcs === true) {

      passwordOptions = numEl.concat(charEl);
      console.log(passwordOptions);

    } if (addLowerCase === false && addUpperCase === false && addNumbers === false && addCharcs === true) {

      passwordOptions = passwordOptions.concat (charEl);
      console.log(passwordOptions);

    } if (addLowerCase === true && addUpperCase === false && addNumbers === false && addCharcs === false) {

      passwordOptions = passwordOptions.concat (lowerCaseEl);
      console.log(passwordOptions);

    } if (addLowerCase === true && addUpperCase === true && addNumbers === false && addCharcs === false) {

      passwordOptions = lowerCaseEl.concat (upperCaseEl);
      console.log(passwordOptions);

    } if (addLowerCase === true && addUpperCase === true && addNumbers === true && addCharcs === false) {

      var upperLowerLetters = lowerCaseEl.concat (upperCaseEl);
      passwordOptions = numEl.concat (upperLowerLetters);
      console.log(passwordOptions)

    } if (addLowerCase === false && addUpperCase === false && addNumbers === false && addCharcs === false) {

      alert ("Must choose at least one type of character, please try again!")

    } 

  }

for (var i = 0; i < passLength; i++) {

  var genRandom = Math.floor(Math.Random() * passwordOptions.length);
  finalPassword += passwordOptions [genRandom];
}


insertPass.textContent = finalPassword;

}






  






// Assignment Code
//var generateBtn = document.querySelector("#generate");


// Write password to the #password input
/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} */

// Add event listener to generate button
////generateBtn.addEventListener("click", writePassword);




//Concat sections for joining arrays.

//var letters = lowerCase.concat (upperCase);
//var numLetter = letters.concat (num);
//var charAll = numLetter.concat (char);
//console.log (charAll);






