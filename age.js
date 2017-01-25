// 1. How many hours are in a year

var hoursPerYear = (365 * 24)
console.log (hoursPerYear)


// 2. How many minutes are in a decade

var secondsPerMin=60
var minPerHour= 60
var hourPerday=24
var daysPerWeek=7
var weeksPerYear=52
var yearsPerDecade=10

console.log (minPerHour * hourPerday * daysPerWeek * weeksPerYear * yearsPerDecade)

// 3. How many seconds old they are

var YearsOfLife=prompt("How old Are You")

console.log(secondsPerMin* minPerHour * hourPerday * daysPerWeek * weeksPerYear * YearsOfLife)


// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

if (YearsOfLife>31) {

	console.log("I am Old")
}

else {

 console.log ("I am young")
}



//YOU DID IT !!!! ;-)