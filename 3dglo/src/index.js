'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validation from './modules/validation';
import commandPhoto from './modules/commandPhoto';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

  //Timer
  countTimer('27 feb 2021');

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