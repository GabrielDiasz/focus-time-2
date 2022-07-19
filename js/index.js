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

//Sons
const treeAudio = new Audio("https://s17.aconvert.com/convert/p3r68-cdx67/idvvy-4ex96.mp3")
const rainAudio = new Audio("https://s31.aconvert.com/convert/p3r68-cdx67/db3me-msrjq.mp3")
const coffeShopAudio = new Audio("https://s27.aconvert.com/convert/p3r68-cdx67/hqili-azbbu.mp3")
const fireAudio = new Audio("https://s33.aconvert.com/convert/p3r68-cdx67/g0hlp-gsltr.mp3")

let timer
function countDown() {
  timer = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
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

//Input range
const inputRange = document.querySelector('.input-range')
const inputRange1 = document.querySelector('.input-range1')
const inputRange2 = document.querySelector('.input-range2')
const inputRange3 = document.querySelector('.input-range3')

function setVolume(value, audio) {
  audio.volume = value
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
  buttonTree.classList.add('selected')
  inputRange.classList.add('input-range-light')
  treeAudio.play()
  treeAudio.loop = true
  inputRange.addEventListener('input', () => {
    setVolume(inputRange.value, treeAudio)
  })
  // buttonTree.addEventListener('click', function () {
  //   buttonTree.classList.remove('selected')
  //   treeAudio.pause()
  //   treeAudio.loop = false
  // })
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.add('selected')
  inputRange1.classList.add('input-range-light')

  rainAudio.play()
  rainAudio.loop = true

  inputRange1.addEventListener('input', () => {
    setVolume(inputRange1.value, rainAudio)
  })
  // buttonRain.addEventListener('click', function () {
  //   buttonRain.classList.remove('selected')
  //   rainAudio.pause()
  //   rainAudio.loop = false
  // })
})

buttonCoffe.addEventListener('click', function () {
  buttonCoffe.classList.add('selected')
  inputRange2.classList.add('input-range-light')

  coffeShopAudio.play()
  coffeShopAudio.loop = true

  inputRange2.addEventListener('input', () => {
    setVolume(inputRange2.value, coffeShopAudio)
  })
  // buttonCoffe.addEventListener('click', function () {
  //   buttonCoffe.classList.remove('selected')
  //   coffeShopAudio.pause()
  //   coffeShopAudio.loop = false
  // })
})

//Som para mas não volta
buttonFire.addEventListener('click', function () {
  buttonFire.classList.add('selected')
  inputRange3.classList.add('input-range-light')

  fireAudio.play()
  fireAudio.loop = true

  inputRange3.addEventListener('input', () => {
    setVolume(inputRange3.value, fireAudio)
  })
})


const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')

buttonLight.addEventListener('click', function () {
  buttonDark.classList.remove('hide')
  buttonLight.classList.add('hide')
  document.body.style.backgroundColor = '#121214'

  document.querySelector('.icon-light').classList.add('icon-dark')
  document.querySelector('.icon-light1').classList.add('icon-dark')
  document.querySelector('.icon-light2').classList.add('icon-dark')
  document.querySelector('.icon-light3').classList.add('icon-dark')
  document.querySelector('.icon-light4').classList.add('icon-dark')
  document.querySelector('.icon-light5').classList.add('icon-dark')
  document.querySelector('.icon-light6').classList.add('icon-dark')
  document.querySelector('.icon-light7').classList.add('icon-dark')

  document.querySelector('.tree').classList.add('card-dark')
  document.querySelector('.rain').classList.add('card-dark')
  document.querySelector('.coffe-shop').classList.add('card-dark')
  document.querySelector('.fire').classList.add('card-dark')
  document.querySelector('.text').classList.add('text-dark')

  inputRange.classList.add('input-range-light')
  inputRange1.classList.add('input-range-light')
  inputRange2.classList.add('input-range-light')
  inputRange3.classList.add('input-range-light')
})

buttonDark.addEventListener('click', function(){
  buttonDark.classList.add('hide')
  buttonLight.classList.remove('hide')
  document.body.style.backgroundColor = 'white'

  document.querySelector('.icon-light').classList.remove('icon-dark')
  document.querySelector('.icon-light1').classList.remove('icon-dark')
  document.querySelector('.icon-light2').classList.remove('icon-dark')
  document.querySelector('.icon-light3').classList.remove('icon-dark')
  document.querySelector('.icon-light4').classList.remove('icon-dark')
  document.querySelector('.icon-light5').classList.remove('icon-dark')
  document.querySelector('.icon-light6').classList.remove('icon-dark')
  document.querySelector('.icon-light7').classList.remove('icon-dark')

  document.querySelector('.tree').classList.remove('card-dark')
  document.querySelector('.rain').classList.remove('card-dark')
  document.querySelector('.coffe-shop').classList.remove('card-dark')
  document.querySelector('.fire').classList.remove('card-dark')
  document.querySelector('.text').classList.remove('text-dark')

  inputRange.classList.remove('input-range-light')
  inputRange1.classList.remove('input-range-light')
  inputRange2.classList.remove('input-range-light')
  inputRange3.classList.remove('input-range-light')
})
