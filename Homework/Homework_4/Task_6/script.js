/* Создать объект с именем address с полями userName, country, city, street.
Заполнить их через переменные. Значения этих переменных получить через prompt(), как это сделано в примере по ссылке https://jsfiddle.net/u3uwbukg/
Через цикл for in вывести на экран всю информацию о пользователе.*/

let userName = prompt('Please enter username');
let country = prompt('Please enter country');
let city = prompt('Please enter city');
let street = prompt('Please enter street');
const address = {
    userName: userName,
    country: country,
    city: city,
    street: street
};

for (let key in address){
    console.log(address[key]);
}

