// С помощью if
let Lang = 'en';

if (Lang == 'ru') {
  arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (Lang == 'en') {
  arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);



// С помощью switch
let lanG = 'ru';

	switch (lanG) {
		case 'ru':
			arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
		break;
		case 'en':
			arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
		break;
  }
  console.log(arr);



// С помощью многомерного массива
let langArr = [];
langArr ['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
langArr ['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let lang = 'ru';
console.log(langArr[lang]);
