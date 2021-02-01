let russianLang = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let englishLang = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// С помощью if
let lang = confirm('Язык страницы русский?');

if (lang == true) {
  arr = russianLang;
}
else if (lang == false) {
  arr = englishLang;
}
console.log(arr);


// С помощью switch

	switch (lang) {
		case true :
			arr = russianLang;
		break;
		case false:
			arr = englishLang;
		break;
  }
  console.log(arr);


// С помощью многомерного массива
let langArr = [];
langArr [true] = russianLang;
langArr [false] = englishLang;
console.log(langArr[lang]);


// Вторая часть
	
let namePerson = prompt('Введите ваше имя');
let result;

result = (namePerson == 'Артем') ? 'Директор' :
	(namePerson == 'Максим') ? 'Преподаватель' :
	'Студент';

console.log(result);
