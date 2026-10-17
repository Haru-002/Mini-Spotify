let audio = document.querySelector(".audio")
let playBtn = document.querySelector(".play-btn")
let timeline = document.querySelector(".timeline-slide")


let click2 = document.querySelector(".btn")
let audio2 = document.querySelector(".audio2")
let timeline2 = document.querySelector('.timeline-slide2')

let click3 = document.querySelector('.btn1')
let audio3 = document.querySelector('.audio3')
let timeline3 = document.querySelector('.timeline-slide3')

function pauseAll() {
  audio.pause();
  playBtn.textContent = "▶";

  audio2.pause();
  click2.textContent = "▶";

  audio3.pause();
  click3.textContent = "▶";
}

function play() {
  if (audio.paused) {
    pauseAll()
    audio.play()
    playBtn.textContent = "⏸"
  } else {
    audio.pause()
    playBtn.textContent = "▶"
  }
}

function play2() {
  if (audio2.paused) {
    pauseAll()
    audio2.play()
    click2.textContent = "⏸"
  } else {
    audio2.pause()
    click2.textContent = "▶"
  }
}

function play3(){
  if (audio3.paused) {
    pauseAll()
    audio3.play()
    click3.textContent = "⏸"
  } else {
    audio3.pause()
    click3.textContent = "▶"
  }
}

audio.addEventListener("loadedmetadata", function() {
  timeline.max = audio.duration;
});
timeline.addEventListener("input", function() {
  audio.currentTime = timeline.value;
});


audio3.addEventListener("loadedmetadata", function() {
  timeline3.max = audio3.duration;
});
timeline3.addEventListener("input", function() {
  audio3.currentTime = timeline3.value;
});

audio2.addEventListener("loadedmetadata", function() {
  timeline2.max = audio2.duration;
});
timeline2.addEventListener("input", function() {
  audio2.currentTime = timeline2.value;
})


audio.addEventListener("timeupdate", function() {
  timeline.value = audio.currentTime;
});

audio2.addEventListener("timeupdate", function() {
  timeline2.value = audio2.currentTime;
});

audio3.addEventListener("timeupdate", function() {
  timeline3.value = audio3.currentTime;
});