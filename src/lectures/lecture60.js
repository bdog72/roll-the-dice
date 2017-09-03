console.log('hey')

var john = {
  name: 'John',
  age: 45,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I am ' + this.name + ' I am a ' + this.job + ' I am ' + this.age + ' years old')
    } else if (style === 'friendly') {
      console.log('Hey what up dog')
    }
  }
}

john.presentation('formal', 'morning')

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

function isFullAge (limit, el) {
  return el >= limit
}

var ages = arrayCalc(years, calculateAge)
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))

console.log(ages)
console.log(fullJapan)
