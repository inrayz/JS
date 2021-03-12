'use strict';
function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
    
    const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
        return{timeRemaining, hours, minutes, seconds};
    };
    function pad(n) {
            if (n < 10){
                return "0" + n;
            }
            return n;
        }
    function updateClock(){
      let timer = getTimeRemaining();
        timerHours.textContent = pad(timer.hours);
        timerMinutes.textContent = pad(timer.minutes);
        timerSeconds.textContent = pad(timer.seconds);
      if(timer.timeRemaining > 0){
        setInterval(updateClock, 1000);
      }else{
        clearInterval(2);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    }
    updateClock();
  }

  export default countTimer;