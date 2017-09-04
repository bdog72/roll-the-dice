
(function () {
  function Question (question, answers, correct) {
    this.question = question
    this.answers = answers
    this.correct = correct
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question)

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i])
    }
  }

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct Answer!')
    } else {
      console.log('Wrong Answer!')
    }
  }

  var q1 = new Question('Is Javascript the coolest programming language in the world?',
    ['Yes', 'No'], 0)

  var q2 = new Question('What is the name of the course teacher?',
    ['John', 'Michael', 'Jonas'], 2)

  var q3 = new Question('What best describes coding?',
    ['Boring', 'Hard', 'Tedious'], 2)

  var questions = [q1, q2, q3]

  var n = Math.floor(Math.random() * questions.length)

  questions[n].displayQuestion()

  var answer = parseInt(prompt('Please Select The Correct Answer'))

  questions[n].checkAnswer(answer)
})()

// (function () {
//   function Question (question, answers, correct) {
//     this.question = question
//     this.answers = answers
//     this.correct = correct
//   }
//
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question)
//
//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ': ' + this.answers[i])
//     }
//   }
//
//   Question.prototype.checkAnswer = function (ans) {
//     if (ans === this.correct) {
//       console.log('Correct Answer!')
//     } else {
//       console.log('Wrong Answer!')
//     }
//   }
//
//   var q1 = new Question('Is Javascript the coolest programming language in the world?',
//     ['Yes', 'No'], 0)
//
//   var q2 = new Question('What is the name of the course teacher?',
//     ['John', 'Michael', 'Jonas'], 2)
//
//   var q3 = new Question('What best describes coding?',
//     ['Boring', 'Hard', 'Tedious'], 2)
//
//   var questions = [q1, q2, q3]
//
//
//
//   function nextQuestion () {
//     var n = Math.floor(Math.random() * questions.length)
//
//     questions[n].displayQuestion()
//
//     var answer = prompt('Please Select The Correct Answer')
//
//     if (answer !== 'exit') {
//       questions[n].checkAnswer(parseInt(answer))
//       nextQuestion()
//     }
//   }
//   nextQuestion()
// })()
