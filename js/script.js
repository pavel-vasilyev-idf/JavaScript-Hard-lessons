'use strict'



let newDay = '';
let dateMonth = '';
let dateYear = '';
let newMonth = '';
let monthNum = '';
let dateHour = '';
let dateHourText = '';
let dateMinutes = '';
let dateMinutesText = '';
let dateSeconds = '';
let dateSecondsText = '';





const updateTime = function () {

    const currentDate = new Date();
    const dateDay = currentDate.getDay();
    const numDate = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();



    // a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  



    //- Добавляем день недели строкой(с заглавной)


    //- Год
    dateYear = year.toString();


    //- Дни строкой
    const dayArray = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];


    for (let i = 0; i < dayArray.length; i++) {
        let numDate = dayArray.indexOf(dayArray[i]);
        let newDayNum = numDate + 1
        if (newDayNum === dateDay) {
        newDay = (dayArray[newDayNum - 1].charAt(0).toUpperCase() + dayArray[newDayNum - 1].slice(1));
        } else {
        }
    }

    //- День недели числом
    if (numDate < 10) {
        let dateString = numDate.toString();
        dateMonth = `0${dateString}`;
    } else {
        dateMonth = numDate;
    }



    //- Добавляем месяц
    const monthArray = [
        'января', 'февраля', 'марта',
        'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря'
    ]


    if (month < 10) {
        let monthNumString = month.toString();
        monthNum = `0${monthNumString}`
    } else {
        monthNum = month;
    }

    for (let i = 0; i < monthArray.length; i++) {
        let numMonth = monthArray.indexOf(monthArray[i]);
        let newMonthNum = numMonth + 1
        if (newMonthNum === month) {
            newMonth = (monthArray[newMonthNum - 1].charAt(0).toUpperCase() + monthArray[newMonthNum - 1].slice(1));
        } else {
        }
    }


    //- Время + проверка на слово "час"
    if (hours < 10) {
        let dateHourString = hours.toString();
        dateHour = `0${dateHourString}`;
    } else {
        dateHour = hours;
    }

    if (hours !== 1 && hours !== 21 && ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24))) {
        dateHourText = 'часа';
    } else if (hours === 1 || hours === 21) {
        dateHourText = 'час';
    } else if (hours >= 5 && hours <= 20) {
        dateHourText = 'часов';
    }

    //- Минуты + проверка на слово "минута"
    if (hours < 10) {
        let dateHourString = hours.toString();
        dateMinutes = `0${dateHourString}`;
    } else {
        dateMinutes = minutes;
    }


    if (minutes === 1) {
        dateMinutesText = 'минута';
    } else if ((minutes >= 2 && minutes <= 4) || (minutes >= 22 && minutes <= 24) || (minutes >= 32 && minutes <= 34) || (minutes >= 42 && minutes <= 44) || (minutes >= 52 && minutes <= 54)) {
        dateMinutesText = 'минуты';
    } else {
        dateMinutesText = 'минут';
    }

    //- Секунды + проверка на слово "секунда"
    if (hours < 10) {
        let dateSecondsString = seconds.toString();
        dateSeconds = `0${dateSecondsString}`;
    } else {
        dateSeconds = seconds;
    }


    if (seconds === 1) {
        dateSecondsText = 'секунда';
    } else if ((seconds >= 2 && seconds <= 4) || (seconds >= 22 && seconds <= 24) || (seconds >= 32 && seconds <= 34) || (seconds >= 42 && seconds <= 44) || (seconds >= 52 && seconds <= 54)) {
        dateSecondsText = 'секунды';
    } else {
        dateSecondsText = 'секунд';
    }

    console.log(`Сегодня ${newDay}, ${dateMonth} ${newMonth} ${year} года, ${dateHour} ${dateHourText} ${dateMinutes} ${dateMinutesText} ${dateSeconds} ${dateSecondsText}`);

    // б) '04.02.2020 - 21:05:33' 
    console.log(` ${dateMonth}.${monthNum}.${year} - ${dateHour}:${dateMinutes}:${dateSeconds}`);

}

setInterval(updateTime, 1000);





