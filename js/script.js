// choose random color

const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['black', 'yellow', 'blue', 'green', 'red']

body.style.backgroundColor = 'grey'

button.addEventListener('click', changeBackground)

function changeBackground(){
  const colorIndex = parseInt(Math.random()*colors.length)
  body.style.background = colors[colorIndex]
}
