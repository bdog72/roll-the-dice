console.log('bozo beak')

const years = [1980, 1990, 1972, 2001]

var ages5 = years.map(function (el) {
  return 2016 - el
})
console.log(ages5)

let ages6 = years.map(el => 2016 - el)
console.log(ages6)

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`)

console.log(ages6)

// ES5

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear()
  const age = now - el
  return `Age element ${index + 1}: ${age}`
})
console.log(ages6)

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this
    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color
      alert(str)
    })
  }
}
box5.clickMe()

// ES6

const box6 = {
  color: 'green',
  position: 2,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color
      alert(str)
    })
  }
}
box6.clickMe()
