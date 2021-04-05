'use strict'

// // Task with lang

// let lang = prompt('Введите желаемый язык("ru" либо "en")');
// let ruArr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// let unArr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];


// //with if/else construction

// if (lang == 'ru') {
//     console.log(ruArr);
//     alert(ruArr);
// }
// if (lang == 'en') {
//     console.log(unArr);
//     alert(unArr);
// }


// // with switch construction

// switch (lang) {
//     case 'ru':
//         console.log(ruArr);
//         alert(ruArr);
//         break;
//     case 'en':
//         console.log(unArr);
//         alert(unArr);
//     default:
//         console.log('Вы не выбрали никакой язык');
//         alert('Вы не выбрали никакой язык');
//         break;
// }


// // through a multidimensional array
// let multiArr = {
//     'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//     'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']
// }

// alert(multiArr[lang]);
// console.log(multiArr[lang]);




// Task with Person

let namePerson = prompt("Введите имя, чтобы узнать должность");

namePerson === "Артем" ? console.log(`${namePerson} - "директор"`) : namePerson === "Максим" ? console.log(`${namePerson} - "преподаватель"`) : console.log(`${namePerson} - "студент"`);
