
class Game {
  constructor(options){
    this.$queryDisplay = document.querySelector(options.queryDisplay)
    this.$answerDisplay = document.querySelector(options.answerDisplay)
    this.$logDisplay = document.querySelector(options.logDisplay)
  }

  nextQuestion(){
    this.numberA = Math.round(Math.random()*10)
    this.numberB = Math.round(Math.random()*10)
    this.$queryDisplay.textContent = `${this.numberA} * ${this.numberB} =`
  }

  checkAnswer(){
    this.answer = parseInt(this.$answerDisplay.textContent)
    if (this.numberA * this.numberB == this.answer) {
      this.answerString = document.createElement('p')
      this.answerString.textContent = `${this.numberA} * ${this.numberB} = ${this.answer} - РџСЂР°РІРёР»СЊРЅРѕ!`
      this.answerString.style = 'color: green;'
    } else {
      this.answerString = document.createElement('p')
      this.answerString.textContent = `${this.numberA} * ${this.numberB} = ${this.answer} - РќРµ РїСЂР°РІРёР»СЊРЅРѕ!`
      this.answerString.style = 'color: red;'
    }
    this.$answerDisplay.textContent = ''
    this.nextQuestion()
    this.$logDisplay.appendChild(this.answerString)
  }
}

const divDisplay = document.querySelector('#display')
let first = true
function digit(event){
  if (first){
    divDisplay.textContent = event.textContent
    first = false
  } else {
    divDisplay.textContent = divDisplay.textContent + event.textContent
  }
}

function del(){
  if (!first){
    if (divDisplay.textContent.length > 1) {
      divDisplay.textContent = divDisplay.textContent.slice(0,-1)
    } else {
      divDisplay.textContent = '0'
      first = true;
    }    
  }
}

const game = new Game({
  queryDisplay: '#question',
  answerDisplay: '#display',
  logDisplay: '#logger'
})

game.nextQuestion()