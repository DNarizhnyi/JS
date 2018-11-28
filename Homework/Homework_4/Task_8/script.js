// Используя массив температур из задания 4 и метод reduce() выведите среднюю температуру за год по Цельсию 
//(item * 9/5)+32;

let temp = [-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3];

let a = temp.reduce(function (prevValue, currentValue){

return  ((prevValue+currentValue));
});

console.log(a * 9/5)+32;


let sum = 0;
for (i=0; i<temp.length;i++){
    sum += temp[i];
}

console.log((sum/temp.length) * 9/5) + 32;