/* Есть массив средних температур по шкале Цельсия по Киеву за каждый месяц года [-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3]. 
К вам в гости приехал американец и просит перевести эти температуры в Фаренгейт. 
Используя метод forEach() или метод map() выведите на экран новый массив с этими же температурами, но по Фаренгейту.
 Формула перевода температур успешно находится с помощью сайта гугл.ком)) */


let temperature = [-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3];

temperature.forEach(function(item){
    console.log ('Celsium ' + item + " equals " + ((item * 9/5)+32) + " Farengeith");

});

function Farengeith (item){
    const coef = (item * 9/5)+32;
    return coef;
}

const tempFaren = temperature.map(Farengeith);

document.write (tempFaren);