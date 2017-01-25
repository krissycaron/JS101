//switch statement

// var day = "Friday";

// switch(day) {

// 	case "Monday":
// 		console.log("BOOOOO");
// 		break;
// 	case "Friday":
// 		console.log("Partay!");
// 		break;
// 	default:
// 		console.log("not Monday");
// }


/*use a switch to match different strings or numbers "if/else" 
statements are the most efficent but sometimes this is cleaner */

//Arrays 

var fruit = ["cherries", "apples", "bananas"]
var fruitString = fruit.join("cats ")
console.log("fruitString", fruitString)

// splits on the comma in the string. 
var catColors = 'green, red, yellow, black';
var catColorsArray = catColors.split(", ")
console.log("catsColorsArray", catColorsArray);


var reverseFruit =fruit.reverse(); 
console.log(reverseFruit);

var alphaFruit = fruit.sort();

console.log("alphaFruit", alphaFruit);


var nums = [9,6,2,3,35,11]; //2,3,6,9,11,35
var numSort = nums.sort(
	function(a,b){
		return a-b
	}
);
console.log("numSort", numSort)



var mixedCrap =["r", "m", 33, 9];
console.log("????", mixedCrap.sort());


var	animals = ["cats", "dogs", "tigers", "horse", "fish", "bears"]

console.log("fish index", animals.indexOf("fish"));

//fish = 3 becasue it will always start with 0 


// Slice returns only what oyu want it to, does not modify original

var animals2 = animals.slice(2,5);
console.log	("animals2", animals2);


// splice removes and modifies the original array
//(1,1) remove the 1 spot and then only remove once
//if youdont enter the second integer it will keep deleting 

animals.splice(1,1);
console.log ("no dogs", animals);

var colors = ["purple", "blue", "green", "yellow", "orange", "red"];

//sort, reverse, make a string
var finalAnswer =colors.sort().reverse().join(" cat ");

//sort  = puts them in alpha order
//reverse = switches the order
//join = join takes the array and puts the word "cat" in between each index
console.log("finalAnswer", finalAnswer);










