
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstyvwxyz";
var num = "0123456789";
var special = "<>?|!@#$%^&*()";
var passLength = prompt("Choose password length from 8 to 128 characters:");
var uppass = confirm("Do you want UPPER CASE characters?");
var lowpass = confirm("Do you want lower case characters?");
var numpass = confirm("Do you want numeric characters?");
var specpass = confirm("Do you want special characters?");


generateBtn.addEventListener("click", writePassword);
if (passLength < 8 || passLength > 128) {
    prompt("Choose password length from 8 to 128 characters:");
} else {

    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        for (var i = 0; i < passLength; i++) {
            password += char.charAt(Math.floor(Math.random() * char.length));
        }

        passwordText.value = password;

    }
}

