'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import maskPhone from './modules/maskPhone';
import validation from './modules/validation';
import commandPhoto from './modules/commandPhoto';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import Validator from './modules/validator';

const validator1 = new Validator({
    selector: '#form1',
    method: {
      'tel': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'text': [
        ['notEmpty']
      ]
    }
  });

  validator1.init();

  const validator2 = new Validator({
    selector: '#form2',
    method: {
      'tel': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'text': [
        ['notEmpty']
      ]
    }
  });

  validator2.init();

  const validator3 = new Validator({
    selector: '#form3',
    method: {
      'tel': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'text': [
        ['notEmpty']
      ]
    }
  });

  validator3.init();


  // маска для телефонов
  maskPhone('.form-phone');

  //Timer
  countTimer('27 march 2021');

  // Меню 
  toggleMenu();

  //popup
  togglePopUp();

  //Табы 
  tabs();

  //Slider
  slider();

  // Change Photo
  commandPhoto();

  // Validation
  validation();

  // Калькулятор
  calc(100);
  
  //send-ajax-form
  sendForm('form1');
  sendForm('form2');
  sendForm('form3');