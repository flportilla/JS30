//get elements

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressFilled = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipper = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


//build functions
function play() {
    if (video.paused) {
        video.play()
    }
    else {
        video.pause()
    }
}
function playPauseButton() {
    const icon = this.paused ? '❚ ❚' : "►";
    toggle.textContent = icon
}
function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}
function handleRanges() {
    video[this.name] = this.value
}
function handleProgress (){
    const percent = (video.currentTime / video.duration)*100
    progressFilled.style.flexBasis = `${percent}%`
}
function manuallyProgress(e){
    console.log(e)
    const time = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = time
}

//hook up the event listeners


video.addEventListener('click', play)
video.addEventListener('play', playPauseButton)
video.addEventListener('pause', playPauseButton)

toggle.addEventListener('click', play)

skipper.forEach(button =>
    button.addEventListener('click', skip))

ranges.forEach(range =>
    range.addEventListener("change", handleRanges))
ranges.forEach(range =>
    range.addEventListener("mousemove", handleRanges))

video.addEventListener('timeupdate', handleProgress)

let mousedown = false;

progress.addEventListener('click', manuallyProgress)
progress.addEventListener('mousemove', () => {
    if(mousedown){
        manuallyProgress()}})

progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

