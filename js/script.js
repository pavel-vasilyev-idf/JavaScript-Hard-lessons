let num = 266219 ;
let numArr = num.toString().split('')

let numArrResult = numArr.reduce(function (mult, current) {
    return  Number(mult) * Number(current);
    // return mult * current; - но сработет и так тоже, без пеобразования в число каждого элемента массива
});

console.log(numArrResult);
let nnumPow = numArrResult ** 3;
console.log(nnumPow);
console.log(nnumPow.toString().substr(0,2));