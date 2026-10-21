
let audio = document.querySelector(".audio")
let playBtn = document.querySelector(".play-btn")
let timeline = document.querySelector(".timeline-slide")


let click2 = document.querySelector(".btn")
let audio2 = document.querySelector(".audio2")
let timeline2 = document.querySelector('.timeline-slide2')

let click3 = document.querySelector('.btn1')
let audio3 = document.querySelector('.audio3')
let timeline3 = document.querySelector('.timeline-slide3')

let click4 = document.querySelector('.btn4')
let audio4 = document.querySelector('.audio4')
let timeline4 = document.querySelector('.timeline-slide4')

let click5 = document.querySelector('.btn5')
let audio5 = document.querySelector('.audio5')
let timeline5 = document.querySelector('.timeline-slide5')

let click6 = document.querySelector('.btn6')
let audio6 = document.querySelector('.audio6')
let timeline6 = document.querySelector('.timeline-slide6')

let click7 = document.querySelector('.btn7')
let audio7 = document.querySelector('.audio7')
let timeline7 = document.querySelector('.timeline-slide7')

let click8 = document.querySelector('.btn8')
let audio8 = document.querySelector('.audio8')
let timeline8 = document.querySelector('.timeline-slide8')

let click9 = document.querySelector('.btn9')
let audio9 = document.querySelector('.audio9')
let timeline9 = document.querySelector('.timeline-slide9')

let click10 = document.querySelector('.btn10')
let audio10 = document.querySelector('.audio10')
let timeline10 = document.querySelector('.timeline-slide10')

let click11 = document.querySelector('.btn11')
let audio11 = document.querySelector('.audio11')
let timeline11 = document.querySelector('.timeline-slide11')

let click12 = document.querySelector('.btn12')
let audio12 = document.querySelector('.audio12')
let timeline12 = document.querySelector('.timeline-slide12')

function pauseAll() {
  audio.pause();
  playBtn.textContent = "▶";

  audio2.pause();
  click2.textContent = "▶";

  audio3.pause();
  click3.textContent = "▶";

  audio4.pause();
  click4.textContent = "▶";

  audio5.pause();
  click5.textContent = "▶";

  audio6.pause();
  click6.textContent = "▶";

  audio7.pause();
  click7.textContent = "▶";

  audio8.pause();
  click8.textContent = "▶";

  audio9.pause();
  click9.textContent = "▶";

  audio10.pause();
  click10.textContent = "▶";

  audio11.pause();
  click11.textContent = "▶";

  audio12.pause();
  click12.textContent = "▶";
}

function play(musicStart) {
  if (musicStart === 'first') {
    if (audio.paused) {
      pauseAll()
      audio.play()
      playBtn.textContent = "⏸"
    } else {
      audio.pause()
      playBtn.textContent = "▶"
    }
  } else if (musicStart === 'second') {
    if (audio2.paused) {
      pauseAll()
      audio2.play()
      click2.textContent = "⏸"
    } else {
      audio2.pause()
      click2.textContent = "▶"
    }
  } else if (musicStart === 'third') {
    if (audio3.paused) {
      pauseAll()
      audio3.play()
      click3.textContent = "⏸"
    } else {
      audio3.pause()
      click3.textContent = "▶"
    }
  } else if (musicStart === 'fourth') {
    if (audio4.paused) {
      pauseAll()
      audio4.play()
      click4.textContent = "⏸"
    } else {
      audio4.pause()
      click4.textContent = "▶"
    }
  } else if (musicStart === 'fifth') {
    if (audio5.paused) {
      pauseAll()
      audio5.play()
      click5.textContent = "⏸"
    } else {
      audio5.pause()
      click5.textContent = "▶"
    }
  } else if (musicStart === 'moh') {
    if (audio6.paused) {
      pauseAll()
      audio6.play()
      click6.textContent = "⏸"
    } else {
      audio6.pause()
      click6.textContent = "▶"
    }
  } else if (musicStart === 'essa') {
    if (audio7.paused) {
      pauseAll()
      audio7.play()
      click7.textContent = "⏸"
    } else {
      audio7.pause()
      click7.textContent = "▶"
    }
  } else if (musicStart === 'AMS') {
    if (audio8.paused) {
      pauseAll()
      audio8.play()
      click8.textContent = "⏸"
    } else {
      audio8.pause()
      click8.textContent = "▶"
    }
  } else if (musicStart === 'ABA') {
    if (audio9.paused) {
      pauseAll()
      audio9.play()
      click9.textContent = "⏸"
    } else {
      audio9.pause()
      click9.textContent = "▶"
    }
  } else if (musicStart === 'tera') {
    if (audio10.paused) {
      pauseAll()
      audio10.play()
      click10.textContent = "⏸"
    } else {
      audio10.pause()
      click10.textContent = "▶"
    }
  } else if (musicStart === 'black') {
    if (audio11.paused) {
      pauseAll()
      audio11.play()
      click11.textContent = "⏸"
    } else {
      audio11.pause()
      click11.textContent = "▶"
    }
  } else if (musicStart === 'voodoo') {
    if (audio12.paused) {
      pauseAll()
      audio12.play()
      click12.textContent = "⏸"
    } else {
      audio12.pause()
      click12.textContent = "▶"
    }
  }
}

function setuplayer(audioObj, timelineObj) {
  audioObj.addEventListener('loadmetadata', function () {
    timelineObj.max = audioObj.duration
  })

  timelineObj.addEventListener('input', function () {
    audioObj.currentTime = timelineObj.value
  })

  audioObj.addEventListener('timeupdate', function () {
    timelineObj.value = audioObj.currentTime
  })
}
setuplayer(audio, timeline)
setuplayer(audio3, timeline3)
setuplayer(audio2, timeline2)
setuplayer(audio4, timeline4)
setuplayer(audio5, timeline5)
setuplayer(audio6, timeline6)
setuplayer(audio7, timeline7)
setuplayer(audio8, timeline8)
setuplayer(audio9, timeline9)
setuplayer(audio10, timeline10)
setuplayer(audio11, timeline11)
setuplayer(audio12, timeline12)