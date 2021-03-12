'use strict'
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

  export default togglePopUp;