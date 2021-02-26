window.addEventListener('DOMContentLoaded', function(){
  'use strict';


  //Timer
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
  countTimer('27 feb 2021');


  // Меню 
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click',handlerMenu);
    closeBtn.addEventListener('click',handlerMenu);
    menuItems.forEach((elem)=> elem.addEventListener('click',handlerMenu));
  };
  toggleMenu();

  //popup
  const togglePopUp = () => {
      const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close'),
					popupContent = popup.querySelector('.popup-content'),
         	popupContentRect =  popupContent.getBoundingClientRect(),
         	popupContentX = popupContentRect.x;
      popupClose.addEventListener('click', () =>  popup.style.display = 'none');
			function animationPopUp(){
				let animationId;
				let count = -1200;
				popupContent.style.transform = `translate(${count}px)`;
						const animationFunc = () => {
							animationId = requestAnimationFrame(animationFunc);
							count += 50;
								if (count >= popupContentX - 50){
									cancelAnimationFrame(animationId);
								}
							popupContent.style.transform = `translate(${count}px)`;	
						};
				animationFunc();			
			}
      let width;
      window.addEventListener(`resize`, function(){
        width = document.documentElement.clientWidth;
      });
       popupBtn.forEach(elem => elem.addEventListener('click', () => {
          popup.style.display = 'block';
					if (width > 768){
						animationPopUp();
					}
			}));  
  };
  togglePopUp();
});