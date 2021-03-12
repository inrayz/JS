'use strict'

const commandPhoto = () => {
      const commandPhoto = document.querySelectorAll('#command .command__photo');
      commandPhoto.forEach(item => {
        const photoSrc = item.getAttribute('src');
        const photoData = item.dataset.img;
        item.addEventListener('mouseenter', event => event.target.src = photoData);
        item.addEventListener('mouseleave', event => event.target.src = photoSrc);

      });
  };

  export default commandPhoto;