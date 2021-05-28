function pow(number,degree){
    if(typeof number != 'number' || typeof degree != 'number'){
        alert("Ошибка");
    }
    else {
        if(degree == 1){
            return number;
        }
        else {
            return number *pow(number,degree-1);
        }
    }
}
let number = +prompt("Введите число");
let degree = +prompt("Введите степент");
alert(pow(number,degree));