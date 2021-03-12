'use strict'

const sendForm = (selector) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById(selector);
  
    const buttons = document.querySelectorAll('button[type=submit]');
    const bNum = selector[4]-1;
    buttons.forEach(e => e.setAttribute("disabled", "disabled"));
    document.querySelectorAll('input').forEach(e => e.addEventListener('input', ()=> {
      let valid = 0;
      for(let val of new FormData(form).entries()){
        if(val[1] === '') {
          valid +=1;
        }
      }
        if(valid){         
          buttons[bNum].setAttribute('disabled',  "disabled");
        } else {
          buttons[bNum].removeAttribute('disabled');
        }
    }));
    
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    form.appendChild(statusMessage);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);
      
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      
      fetch('./server.php', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then((response) => {
        if (response.status !== 200) {
          throw new Error(`Что-то пошло не так, код ошибки - ${response.status}`);
        }
        statusMessage.textContent = successMessage;
        updatePage();
      })
      .catch((error) => {
        console.log(error);
        statusMessage.textContent = errorMessage;
        updatePage();
      });
    });
    const updatePage = () => {
      clearInputs(form);
      statusMessage.style.cssText = '';
      buttons[bNum].setAttribute('disabled', 'disabled');
      setTimeout(() => {
        statusMessage.textContent = '';
      }, 3000);
      if(selector === "form3"){
        setTimeout(()=>{
          document.querySelector('.popup').style.display = 'none';
        }, 2000);
      }
    };
    const clearInputs = (form) => {
      const inputs = form.querySelectorAll('input');
      inputs.forEach(item => item.value = '');
    };
  };

  export default sendForm;