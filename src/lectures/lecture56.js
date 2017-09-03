console.log('Molly Moo')

var years = [1972, 1999, 1990, 1932, 1955]

function arrayCalc (arr, fn) {
  var arrRes = []
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

function calculateAge (el) {
  return 2016 - el
}

function isFullAge (el) {
  return el >= 18
}

function maxHeartRate (el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el))
  } else {
    return -1
  }
}

var ages = arrayCalc(years, calculateAge)
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate)

console.log(ages)
console.log(fullAges)
console.log(rates)

function interviewQuestion (job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what a ux design is')
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('what subject do you teach, ' + name + '?')
    }
  } else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?')
    }
  }
}

var teacherQuestion = interviewQuestion('teacher')

teacherQuestion('John')

var designerQuestion = interviewQuestion('designer')

designerQuestion('John')
