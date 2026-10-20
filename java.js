
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

function pauseAll() {
  audio.pause();
  playBtn.textContent = "▶";

  audio2.pause();
  click2.textContent = "▶";

  audio3.pause();
  click3.textContent = "▶";

  audio4.pause();
  click4.textContent = "▶";
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
