'use strict';
function countTimer() {
    let date = new Date();
    let deadline = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
    let timeHours = document.querySelector('#timer-hours'),
        timeMinutes = document.querySelector('#timer-minutes'),
        timeSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {

        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            lefthours = 24 + (Math.floor(timeRemaining / 60 / 60) - 24);

        if (lefthours < 0) {
            date = new Date();
            deadline = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
            return;
        }

        let seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);

        function getTime(time, ...arr) {
            arr = arr.map((item) => item < 10 ? '0' + item : '' + item);
            let [seconds, minutes, hours] = [...arr];
            return {
                timeRemaining,
                seconds,
                minutes,
                hours
            };
        }

        return getTime(timeRemaining, seconds, minutes, hours);
    }
    let timer = getTimeRemaining();
    timeHours.textContent = timer.hours;
    timeMinutes.textContent = timer.minutes;
    timeSeconds.textContent = timer.seconds;

    const updateClock = setInterval(() => {
        let timer = getTimeRemaining();
        if (timer === undefined) {
            clearInterval(updateClock);
            return;
        }
        timeHours.textContent = timer.hours;
        timeMinutes.textContent = timer.minutes;
        timeSeconds.textContent = timer.seconds;

        if (timer.timeRemaining <= 1) {
            clearInterval(updateClock);
        }
    }, 1000);
}
export default countTimer;