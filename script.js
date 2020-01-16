
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstyvwxyz";
var num = "0123456789";
var special = "<>?|!@#$%^&*()";
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ0123456789<>?|!@#$%^&*()";
var passLength;
//var passLength = prompt("Choose password length from 8 to 128 characters:");


/*var uppass = confirm("Do you want UPPER CASE characters?");
var lowpass = confirm("Do you want lower case characters?");
var numpass = confirm("Do you want numeric characters?");
var specpass = confirm("Do you want special characters?");*/

var includeLowerCase = false;
var includeUpperCase = false;
var includeSpecChar = false;
var includeNum = false;
var includeLength = false;


generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

    /*if (passLength < 8 || passLength > 128) {
        prompt("Choose password length from 8 to 128 characters:");
    } else {
        writePassword(passLength);
    
    }*/

    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

}

function generatePassword() {

    var password = "";



    //ask for criteria
    askCase();
    askSpec();
    askNum();
    askLength();

    //make password
    for (var i = 0; i < passLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * passLength));
    }


    //give password back
    return password;
}

/*this is the case function*/
function askCase() {

    var ansCorrect = false;

    while (!ansCorrect) {

        var ans = prompt("Do you want lower case? y/n?");

        if (ans == "y") {
            includeLowerCase = true;
            ansCorrect = true;
        } else if (ans == "n") {
            includeLowerCase = false;
            ansCorrect = true;
        }
    }


    var ansCorrect = false;
    while (!ansCorrect) {


        var ans = prompt("Do you want upper case? y/n?");
        if (ans == "y") {
            includeUpperCase = true;
            ansCorrect = true;
        } else if (ans == "n") {
            includeUpperCase = false;
            ansCorrect = true;

        }


    }

}
/*this is the special character function*/

function askSpec() {


    var ansCorrect = false;

    while (!ansCorrect) {

        var ans = prompt("Do you want special characters? y/n?");

        if (ans == "y") {
            includeSpecChar = true;
            ansCorrect = true;
        } else if (ans == "n") {
            includeSpecChar = false;
            ansCorrect = true;
        }
    }


}

/*this is the number function*/

function askNum() {


    var ansCorrect = false;

    while (!ansCorrect) {

        var ans = prompt("Do you want numbers? y/n?");

        if (ans == "y") {
            includeNum = true;
            ansCorrect = true;
        } else if (ans == "n") {
            includeNum = false;
            ansCorrect = true;
        }
    }


}
/*this is the number function*/

function askLength() {


    var ansCorrect = false;

    while (!ansCorrect) {

        var ans = prompt("Choose a password length: between 8-128.");

        if (ans >= 8 || ans <= 128) {
            includeLength = true;
            ansCorrect = true;
            ans = passLength;
        } else if (ans >= 129 || ans <= 7) {
            includeLength = false;
            ansCorrect = true;
        }
    }


}