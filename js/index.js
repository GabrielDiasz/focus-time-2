//Botões de controle
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

//Minutos e segundos
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

//Botões de sons
const buttonTree = document.querySelector('.tree')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe-shop')
const buttonFire = document.querySelector('.fire')

//Botões darkmode
const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')

//Sons
const treeAudio = new Audio("https://github.com/GabrielDiasz/focus-time-2/blob/main/sounds/Floresta.mp3?raw=true")
const rainAudio = new Audio("https://github.com/GabrielDiasz/focus-time-2/blob/main/sounds/Chuva.mp3?raw=true")
const coffeShopAudio = new Audio("https://github.com/GabrielDiasz/focus-time-2/blob/main/sounds/Cafeteria.mp3?raw=true")
const fireAudio = new Audio("https://github.com/GabrielDiasz/focus-time-2/blob/main/sounds/Lareira.mp3?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

//Input range
const inputRange = document.querySelector('.input-range')
const inputRange1 = document.querySelector('.input-range1')
const inputRange2 = document.querySelector('.input-range2')
const inputRange3 = document.querySelector('.input-range3')
let timer


function countDown() {
  timer = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 0) {
      kitchenTimer.play()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countDown()
  }, 1000)
}

inputRange.oninput = function () {
  treeAudio.volume = inputRange.value
}
inputRange1.oninput = function () {
  rainAudio.volume = inputRange1.value
}
inputRange2.oninput = function () {
  coffeShopAudio.volume = inputRange2.value
}
inputRange3.oninput = function () {
  fireAudio.volume = inputRange3.value
}

function handleButtonSwap(button, audio, input) {
  input.classList.toggle('swap')
  if (button.classList.contains('selected')) {

    button.classList.remove('selected')
    audio.pause()

  } else {

    button.classList.add('selected')
    audio.play()
    audio.loop = true
  }
}

//Ação dos botões de controle
buttonPlay.addEventListener('click', function () {
  countDown()
})

buttonMore.addEventListener('click', function () {
  minutes += 5
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
})

buttonLess.addEventListener('click', function () {
  if (minutes <= 0) {
    return
  } else {
    minutes -= 5
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }
})

buttonStop.addEventListener('click', function () {
  minutesDisplay.textContent = minutes
  secondsDisplay.textContent = String(0).padStart(2, "0")
  clearTimeout(timer)
})

//Ação dos botões de sons
buttonTree.addEventListener('click', function () {
  handleButtonSwap(buttonTree, treeAudio, inputRange)
})

buttonRain.addEventListener('click', function () {
  handleButtonSwap(buttonRain, rainAudio, inputRange1)
})

buttonCoffe.addEventListener('click', function () {
  handleButtonSwap(buttonCoffe, coffeShopAudio, inputRange2) 
})

buttonFire.addEventListener('click', function () {
  handleButtonSwap(buttonFire, fireAudio, inputRange3)
})

buttonLight.addEventListener('click', function () {
  buttonDark.classList.toggle('hide')
  buttonLight.classList.toggle('hide')
  document.body.classList.add('dark-mode')

})

buttonDark.addEventListener('click', function(){
  buttonDark.classList.toggle('hide')
  buttonLight.classList.toggle('hide')
  document.body.classList.toggle('dark-mode')
})
