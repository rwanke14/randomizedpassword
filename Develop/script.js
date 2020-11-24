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


//Setting up the varialbes for the strings and a few others for the function for the end strings to create the password.

var lowerCaseEl = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","u","r","s","t","u","v"];
var upperCaseEl = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numEl = ["1","2","3","4","5","6","7","8","9","10"];
var charEl = ["!","@","#","$","%","^","&","*","?","~"];
var passwordOptions = [];
var finalPassword = "";
var button = document.querySelector ("#genPass");
var insertPass = document.querySelector ("#insertPass");


//Activating the button.

button.addEventListener ("click", randomPassword);


function randomPassword () {

  document.querySelector ("#genPass");
 //Conifrm user wants to create a password.

  var askPass = confirm ("Do you want to create a Password?");
  passLength = parseInt(passwordOptions);
  //Ask about how many characters they would like for their password and establish variables for prompting questions to ask about what letters are needed.
  if (askPass === true) {
    var passLength = prompt ("How long should your password be? (Please pick between 6 and 128)");
    
    //defining password length parameters.

    if (passLength > 6 && passLength < 128) {
      
      var addLowerCase = confirm ("Do you want add lower case letters?");
      var addUpperCase = confirm ("Do you want to add upper case letters?");
      var addNumbers = confirm ("Do you want to add Numbers?");
      var addCharcs = confirm ("Do you want to add special characters?");

      //Setting up alert for if they choose outside the parameters set.

    } else {

      alert ("Choose a number between 6 and 128!"); 

    //The next series of if statements set up each possible scenario for the user and then combines the strings accordingly.
    
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

    } if (addLowerCase === false && addUpperCase === true && addNumbers === false && addCharcs === false)  {

      passwordOptions = passwordOptions.concat(upperCaseEl);
      console.log(passwordOptions);

    } if (addLowerCase === false && addUpperCase === false && addNumbers === true && addCharcs === false) {

      passwordOptions = passwordOptions.concat(numEl);
      console.log (passwordOptions);

    } if (addLowerCase === true && addUpperCase === true && addNumbers === false && addCharcs === true) {

      var lowerUpper = lowerCaseEl.concat (upperCaseEl);
      passwordOptions = lowerUpper.concat (charEl);
      console.log (passwordOptions);

    } if (addLowerCase === false && addUpperCase === false && addNumbers === false && addCharcs === false) {

      alert ("Must choose at least one type of character, please try again!")

    } else{

      //Creating for loop to define password length that will appear in the text box.  
      //Adding a math.floor to generate a random password based on the password options chosen previously.

      for (var i = 0; i < passLength; i++) {
        var genRandom = (Math.floor(Math.random () * passwordOptions.length))
    
    //var genRandom = Math.floor(Math.random() * passwordOptions.length);
    finalPassword += passwordOptions [genRandom];
    console.log (finalPassword);
      }
      

      // In the final step the password is entered back into the text box.
      insertPass.textContent = finalPassword;
     }

      
    }
    
  
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








