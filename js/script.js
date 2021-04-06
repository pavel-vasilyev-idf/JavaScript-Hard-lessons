'use strict'

let str = prompt('Введите что-нибдуь ввиде строки')

let getOneArgument = function (argument) {
    let result = '';
    if ((typeof argument) !== 'string') {
        return ('Введите корректно строку')
    } else {
       let newStr = argument.trim();
       result = newStr.substr(0,30) + '...';     
    }
    return result;
}

console.log(getOneArgument(str));

