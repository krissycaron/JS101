//string Manipulation

var five = "5"; //"5"
var numberFive = parseInt(five); 

//parsefloat = integers with decimals



//String CanCatination
// var firstName = "Kristin"
// var lastName = "Caron"
// var fullName = firstName + lastName;
// console.log(fullName);


//quotes how to write one using "\"

// var quote = "\"Life is good!\""

// console.log ("length: ", quote.length);

// console.log ("Period at index: ", quote.indexOf("!"));


// var newPhrase = quote.replace("good", "purple")
// console.log("quote with replaced word: ", newPhrase)

// var newPhrase = quote.replace(/i/g, "z")
// console.log("quote with letters replaced", newPhrase)

// var phrase = "Hey, look at me!"


// var element = document.getElementById("container");
// console.log(document);


// element.innerHTML = "<b>hello</b>"



// Take the contents of the sonnet div and place it in a variable

var element = document.getElementById("sonnet")


// Take the contents of the sonnet div and place it in a variable
var sonnet =element.innerHTML;

//.innerHTML only grabs the text in the html div not the actual div tags

console.log("starting sonnet text", sonnet);


// Find and output the starting position of the word "orphans"

var indexOfOrphans = sonnet.indexOf ("orphans");



// Output the number of characters in the sonnet


console.log ("length of sonnet ", sonnet.length);

// Replace the first occurance of the string "winter" with "yuletide"


var element = document.getElementById("sonnet");


var newSonnet = sonnet.replace("winter", "yuletide")


// Replace all occurances of the string "the" with "a large"

var globalReplace = newSonnet.replace(/the/g, "a large");


// Set the content of the sonnet div with the new string
//this is the opposite of puling into the js from html

element.innerHTML = globalReplace;




