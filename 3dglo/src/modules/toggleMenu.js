'use strict';

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

export default toggleMenu;