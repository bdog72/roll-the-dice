console.log('bdog')

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth)
  }
}

var john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher'

var a = 23
var b = a
a = 46
console.log(a)
console.log(b)

var obj1 = {
  name: 'John',
  age: 26
}

var obj2 = obj1
obj1.age = 30
console.log(obj1.age)
console.log(obj2.age)

var age = 45
var obj = {
  name: 'Brian',
  city: 'The Burg'
}

function change (a, b) {
  a = 30
  b.city = 'The Burger'
}
change(age, obj)
console.log(age)
console.log(obj.city)
