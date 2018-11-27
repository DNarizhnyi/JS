/*1. Создать массив favouriteFilms из 3-х любимых фильмов. Добавить в него ещё фильмы такими способами:

Один фильм добавить, указав индекс через квадратные скобки, вроде arr[10] = 'text';, только используя правильные индексы

Один добавить через метод push()

Вывести весь массив через console.log()

*/

let favoriteFilms = ['Troya','13 Druzey Oushena','Braveheart'];

favoriteFilms[3] = 'Superman';
favoriteFilms.push ('Gorets');
console.log (favoriteFilms);