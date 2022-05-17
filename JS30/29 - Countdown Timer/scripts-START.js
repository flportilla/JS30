let countDown; //this in necessary because the intervals don't stop, they just stop showning. It is mandatory to clear the interval after the execution of the function

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {

    const now = Date.now();
    const then = now + (seconds * 1000) //convert the input in seconds to milliseconds
    displayTimeLeft(seconds);
    displayEndTime(then);
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);

    }, 1000)

}

//this function is used to display the time left in the timer, it is called every second and it's executed in the first part of the function to show the first second

function displayTimeLeft(seconds) {
    clearInterval(countDown);
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;

    document.title = display;

    console.log({minutes,remainderSeconds });
}

function displayEndTime(timeStamp){
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    const adjutstedHour = hour > 12 ? hour - 12 : hour;

    endTime.textContent = `Be Back At ${adjutstedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds);
}

buttons.forEach(button =>{
    button.addEventListener('click', startTimer);
    })

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})