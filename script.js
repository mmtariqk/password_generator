// Start working code
// User input variables: 
let enter;
var confirmNumeric;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// lowerCasebetical characters
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion
space = [];

// Options declared outside the if statement so they can be concatenated upon condition
var options

// converts letters to uppercase 
var toUpperCase = function (u) {
    return u.toUpperCase();
};

// creates a variable for uppercase conversion
upperCase = lowerCase.map(toUpperCase);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    
    // Asks for user input
    enter = parseInt(prompt("You need to select the length of your password? Choose between 8 and 128 characters"));
    
    // First if statement for user validation 
    if (!enter) {
        confirm("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumeric = confirm("Is this Password contain numerics?");
        confirmCharacter = confirm("Is this contain special characters?");
        confirmUppercase = confirm("Is this contain Uppercase letters?");
        confirmLowercase = confirm("Is this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumeric && !confirmUppercase && !confirmLowercase) {
        options = alert("You must choose a selection criteria!");

    }
    // First if statement that uses user input prompts to determine options
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumeric && confirmUppercase && confirmLowercase) {

        options = character.concat(numeric, lowerCase, upperCase);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumeric && confirmUppercase) {
        options = character.concat(numeric, upperCase);
    }
    else if (confirmCharacter && confirmNumeric && confirmLowercase) {
        options = character.concat(numeric, lowerCase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        options = character.concat(lowerCase, upperCase);
    }
    else if (confirmNumeric && confirmLowercase && confirmUppercase) {
        options = numeric.concat(lowerCase, upperCase);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumeric) {
        options = character.concat(numeric);

    } else if (confirmCharacter && confirmLowercase) {
        options = character.concat(lowerCase);

    } else if (confirmCharacter && confirmUppercase) {
        options = character.concat(upperCase);
    }
    else if (confirmLowercase && confirmNumeric) {
        options = lowerCase.concat(numeric);

    } else if (confirmLowercase && confirmUppercase) {
        options = lowerCase.concat(upperCase);

    } else if (confirmNumeric && confirmUppercase) {
        options = numeric.concat(upperCase);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        options = character;
    }
    else if (confirmNumeric) {
        options = numeric;
    }
    else if (confirmLowercase) {
        options = lowerCase;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        options = space.concat(upperCase);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = options[Math.floor(Math.random() * options.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Your password copied to clipboard!");
}
