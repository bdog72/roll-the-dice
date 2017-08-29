
calculateAge(1972)

function calculateAge (year) {
  console.log(2017 - year)
}

var retirement = function (year) {
  console.log(65 - (2016 - year))
}
retirement(1990)

var age = 23
console.log(age)

function foo () {
  var age = 65
  console.log(age)
}

foo()
console.log(age)

var a = 'Hello'
first()

function first () {
  var b = 'Hi'
  second()

  function second () {
    var c = 'Hey'
    console.log(b + c)
  }
}

function third () {
  var d = 'John'
  console.log(a + d)
}
third()

console.log(this)

calculateAge(1985)
function calculateAge (year) {
  console.log(2016 - year)
  console.log(this)
}

var Bozo = {
  name: 'Brian',
  yearOfBirth: 1972,
  calculateAge: function () {
    console.log(this)
    console.log(2016 - this.yearOfBirth)

    function innerFunction () {
      console.log(this)
    }
    innerFunction()
  }
}

Bozo.calculateAge()

var mike = {
  name: 'Mike',
  yearOfBirth: 1990
}

mike.calculateAge = Bozo.calculateAge
mike.calculateAge()
