'use strict';

const books = document.querySelectorAll('.books'),
      elems = document.querySelectorAll('.book'),
      head = document.querySelectorAll('a'),
      ad = document.querySelector('.adv'),
      ul =document.querySelectorAll('ul'),
      list = document.querySelectorAll('li'),
      newElem = document.createElement('li'),
      body = document.querySelector('body');


body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

 console.log(books);  
 console.log(elems);
 console.log(head);
 console.log(ad);
 console.log(ul);
 console.log(list);
 console.log(newElem);
 console.log(body);
 
books[0].prepend(elems[1]);
elems[0].after(elems[4]);
elems[4].after(elems[3]);
elems[3].after(elems[5]);
head[4].textContent = 'Книга 3. this и Прототипы Объектов';
ad.remove();

list[3].after(list[6]);
list[6].after(list[8]);
list[55].after(list[49]);
list[49].after(list[50]);
list[50].after(list[48]);
list[48].after(list[52]);
list[52].after(list[53]);
list[53].after(list[51]);
list[51].after(list[54]);
list[3].after(list[6]);
list[9].after(list[2]);

newElem.textContent = 'Глава 8: За пределами ES6';
ul[2].append(newElem);
list[25].after(newElem);
