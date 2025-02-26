const bgImageElem = document.querySelector(".bgimage");
const titleElem = document.querySelector(".title");
const singerElem = document.querySelector(".singer");
const fromTimeElem = document.querySelector(".fromTime");
const endTimeElem = document.querySelector(".endTime");
const progressPercentElem = document.querySelector(".progress-percent-time");
const playBtnElem = document.querySelector(".playBtn");
const previousBtnElem = document.querySelector(".previousBtn");
const nextBtnElem = document.querySelector(".nextBtn");
const musicElem = document.querySelector(".music");
let musics = [
  {
    music: "../media/beat-R&B.mp3",
    background: "../media/images/coffee-code.jpg",
    title: "daniyal",
    singer: "kado",
    duration: "1:50",
  },
  {
    music: "../media/beat.2-R&B.mp3",
    background: "../media/images/laptop-in-dark.jpg",
    title: "siyah",
    singer: "hidden",
    duration: "2:20",
  },
  {
    music: "../media/BeatRapOfficial - Rnb Beat Tberbeats.mp3",
    background: "../media/images/pc+coffe=code.jpg",
    title: "asabani",
    singer: "shayea",
    duration: "2:00",
  },
  {
    music: "../media/Trap BeatRapOfficial (1).mp3",
    background: "../media/images/sleep-infront-of-pc.jpg",
    title: "miriTolak",
    singer: "Ho3ein X Pishro",
    duration: "1:20",
  },
];
let indexmusic = 0;
let playFlag = false;
function play() {
  if (playFlag) {
      playBtnElem.classList.replace('bi-pause','bi-play-fill')
    musicElem.pause();
    playFlag = false;
  } else {
    playBtnElem.classList.replace('bi-play-fill','bi-pause')
    musicElem.play();
    playFlag = true;
  }
}
function next() {
  indexmusic++;
  if (indexmusic > musics.length - 1) {
    indexmusic = 0;
  }
  musicElem.setAttribute("src", musics[indexmusic].music);
  titleElem.textContent = musics[indexmusic].title;
  singerElem.textContent = musics[indexmusic].singer;
  bgImageElem.setAttribute("src", musics[indexmusic].background);
  endTimeElem.textContent = musics[indexmusic].duration;
  musicElem.play();
  playFlag = true;
}
function previous() {
  indexmusic--;
  if (indexmusic < 0) {
    indexmusic = musics.length - 1;
  }
  musicElem.setAttribute("src", musics[indexmusic].music);
  bgImageElem.setAttribute("src", musics[indexmusic].background);
  titleElem.textContent = musics[indexmusic].title;
  singerElem.textContent = musics[indexmusic].singer;
  endTimeElem.textContent = musics[indexmusic].duration;
  musicElem.play();
  playFlag = true;
}
function currentTime() {
  let musicTime = Math.floor(musicElem.currentTime);
  let min = Math.floor(musicTime / 60);
  let sec = musicTime % 60;
  if (musicTime < 60) {
    sec = musicTime;
  }
  let minute = min;
  let second = sec;
  if (min < 10) {
    minute = "0" + min;
  }
  if (sec < 10) {
    second = "0" + sec;
  }
  fromTimeElem.textContent = minute + ":" + second;
}
function currentPlus()
{
    musicElem.currentTime += 10
}
function currentMinus()
{
    musicElem.currentTime -= 10
}
function speed2()
{
    musicElem.playbackRate = 2
}
function speed1()
{
    musicElem.playbackRate = 1
}
function speed05()
{
    musicElem.playbackRate = 0.5
}
function updateprogress()
{
    let progressPercent = (Math.floor(musicElem.currentTime) /Math.floor(musicElem.duration) ) * 100
    progressPercentElem.style.width = Math.floor(progressPercent) + "%"
    console.log(progressPercentElem);
}
playBtnElem.addEventListener("click", play);
nextBtnElem.addEventListener("click", next);
previousBtnElem.addEventListener("click", previous);
playBtnElem.addEventListener("touchstart", play);
nextBtnElem.addEventListener("touchstart", next);
previousBtnElem.addEventListener("touchstart", previous);
document.body.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    play();
  } else if (event.code === "PageUp") {
    next();
  } else if (event.code === "PageDown") {
    previous();
  } else if(event.code === "ArrowLeft")
  {
    currentMinus()
  } else if(event.code === "ArrowRight")
  {
    currentPlus()
  } 
  else if( event.key === "l")
  {
    speed2() 
  } else if(event.key === "k")
  {
    speed1()
  } else if(event.key === "j")
  {
    speed05()
  }
});
setInterval(currentTime,200)
setInterval(updateprogress,500)
