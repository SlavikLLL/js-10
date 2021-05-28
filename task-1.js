function factorial(number){
    if(typeof number !='number'){
        alert("Ошибка");
    }
    else {
        if(number == 1 ){
            return number;
        }
        else {
            return number * factorial(number-1);
        }
    }
}
let number = +prompt("Введите число");
alert(factorial(number));