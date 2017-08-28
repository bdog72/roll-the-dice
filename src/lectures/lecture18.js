
var names = ['Bdog', 'Molly', 'Crystal']

console.log(names[2])
names[1] = 'Brian'
console.log(names)

var john = ['John', 'Smith', 1990, 'designer', false]
john.push('red')
john.unshift('Mr.')
john.pop()
john.shift()
console.log(john)

if (john.indexOf('teacher') === -1) {
  console.log('john is not a teacher')
}

console.log(john.last)
console.log(john['job'])

var xyz = 'job'
console.log(john[xyz])

john.last = 'miller'
john['job'] = 'driver'

console.log(john)

// var jane = new Object()
// jane.name = 'Jane'
// jane.lastName = 'Smith'
// jane['yaerOfBirth'] = 1969
// jane['job'] = 'retired'
// jane['isMarried'] = true
// console.log(jane)

var john2 = {
  name: 'Bdog',
  last: 'Brian',
  yearOfBirth: 1972,
  job: 'programmer',
  isMarried: false,
  family: ['jane', 'mark', 'bob'],
  calculateAge: function (yearOfBirth) {
    return 2017 - this.yearOfBirth
  }
}
var age = john2.calculateAge()
john2.age = age
console.log(john2)

console.log(john2.calculateAge())

var john1 = {
  name: 'Bdog',
  last: 'Brian',
  yearOfBirth: 1972,
  job: 'programmer',
  isMarried: false,
  family: ['jane', 'mark', 'bob'],
  calculateAge: function (yearOfBirth) {
    this.age = 2016 - this.yearOfBirth
  }
}
john1.calculateAge()
console.log(john1)
