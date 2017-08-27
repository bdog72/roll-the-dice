
var heightJohn = 60
var heightBrian = 65
var heightMary = 70

var ageJohn = 15
var ageBrian = 20
var ageMary = 25

var scoreJohn = heightJohn + 5 * ageJohn
var scoreBrian = heightBrian + 5 * ageBrian
var scoreMary = heightMary + 5 * ageMary

if (scoreJohn > scoreBrian && scoreJohn > scoreMary) {
  console.log('John wins with ' + scoreJohn)
} else if (scoreBrian > scoreJohn && scoreBrian > scoreMary) {
  console.log('Brian wins with ' + scoreBrian)
} else if (scoreMary > scoreJohn && scoreMary > scoreBrian) {
  console.log('Mary wins with ' + scoreMary)
} else {
  console.log('Its a draw')
}
