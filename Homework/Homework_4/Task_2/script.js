/*Создать массив с планетами, включая Плутон. Удалить Плутон методом pop()

Вывести все планеты по одной, перебрав массив в цикле for()
*/

let planets = ['Mercuri','Venera','Earth','Mars','Jupiter','Saturn','Uran','Neptun','Pluton'];

planets.pop(); //удалил методом pop. Он удаляет последний элемент массива.

for (i=0; i<=planets.length-1; i++){  // перебор элеметов массива
    console.log (planets[i]);
}