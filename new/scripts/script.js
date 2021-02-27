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
    const menu = document.querySelector('menu');
    
    const handlerMenu = () => menu.classList.toggle('active-menu');

  function scroll(block, dur) {
    const endPoint = block.offsetTop;
    let idAnimate;
    let num = 0;
    function animateScroll() {  
      idAnimate = requestAnimationFrame(animateScroll);

  function duration(count) {
    if (num > (endPoint * 0.95) && count !== 1) {
      count = count / 2;
      } else {
        if (endPoint > 4000) {
          count += 3;
        } else  if (endPoint > 3000) {
          count += 2;
        }
      }
    num = num + (count * 20);  
  }

  duration(dur);
  document.documentElement.scrollTop = num;

  if (num > endPoint) {
    document.documentElement.scrollTop = endPoint;
    cancelAnimationFrame(idAnimate);
  }
}

  idAnimate = requestAnimationFrame(animateScroll);
}
  document.addEventListener('click', event => {
    let target = event.target;
    if ( target.closest('main') && !menu.classList.contains('active-menu') ) {
      if ( target.closest('.menu') ) {
        handlerMenu(); 
      } else if ( target.closest('a[href="#service-block"]') ) {
        event.preventDefault();
        scroll(document.getElementById('service-block'), 2);
      }
        } else if (menu.classList.contains('active-menu')) {
          if ( target.closest('menu') === null || target.classList.contains('close-btn') ) {
          handlerMenu();
          } else if ( target.tagName === 'A' && !target.classList.contains('.close-btn')) {
            event.preventDefault();
            handlerMenu();
            const targetId = target.getAttribute('href').substring(1);
            const block = document.getElementById(targetId);
            scroll(block, 3);
          } 
        }
  });
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
      let width = document.documentElement.clientWidth;
      window.addEventListener(`resize`, function(){
        width = document.documentElement.clientWidth;
      });
       popupBtn.forEach(elem => elem.addEventListener('click', () => {
          popup.style.display = 'block';
					if (width > 768){
						animationPopUp();
					}
			}));  
      popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
          popup.style.display = 'none';
        }else{
          target = target.closest('.popup-content');
            if(!target){
                popup.style.display = 'none';
            }
        }
      });
  };
  togglePopUp();

  //Табы 

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++){
          if (index === i){
              tab[i].classList.add('active')
              tabContent[i].classList.remove('d-none');
          }else{tab[i].classList.remove('active')
              tabContent[i].classList.add('d-none');
            }
        }
    };    

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
          target = target.closest('.service-header-tab');
        if(target){
            tab.forEach((item, i) => {
              if(item === target){
                  toggleTabContent(i);
              }
            });
        }
    });
  };

  tabs();

  //Slider

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        dotContainer = document.querySelector('.portfolio-dots'),
        sliders = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval;

    slide.forEach((i) => {
        let li = document.createElement('li');

        li.classList.add('dot');

        if (i === 0) {
            li.classList.add('dot-active');
        }

        dotContainer.appendChild(li);
        });
    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide,'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide,'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    sliders.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')){
          return;
      }

      prevSlide(slide, currentSlide,'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      } else if(target.matches('#arrow-left')){
        currentSlide--;
      } else if (target.matches('.dot')){
        dot.forEach((elem, index) => {
          if (elem === target){
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length){
        currentSlide = 0;
      }

      if(currentSlide < 0){
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide,'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    sliders.addEventListener('mouseover', (event) =>{
        if(event.target.matches('.portfolio-btn') || 
        event.target.matches('.dot')){
          stopSlide();
        }
    });

    sliders.addEventListener('mouseout', (event) =>{
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
          startSlide();
        }
    });

    startSlide(1500);
  };
  slider();
});