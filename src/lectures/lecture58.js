console.log('dork')

function game () {
  var score = Math.random() * 10
  console.log(score >= 5)
}
game();

(function () {
  var score = Math.random() * 10
  console.log(score >= 5)
})()

function retirement (retirementAge) {
  var a = ' years left until retirement'
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth
    console.log((retirementAge - age) + a)
  }
}
var retirementUS = retirement(66)
retirementUS(1972)

function interviewQuestion (job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what a ux design is')
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?')
    } else {
      console.log('Hello ' + name + ', what do you do?')
    }
  }
}
interviewQuestion('teacher')('John')
