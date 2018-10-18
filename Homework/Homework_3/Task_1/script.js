var drink = prompt("Please choose what you would like to drink");

switch (drink) {
    case "vodka":
    case "beer":
    case "whiskey":
    case "chicha":
    case "absinthe":
    case "brandy":
    case "rum":
    case "sake":

        var result = confirm("Ok, are you 21 years old?");
        if (result == true) {
            alert("Here is your " + drink);
        } else {
            alert("I can not offer you " + drink);
        }
        break;
    case "juice":
    case "water":
    case "milk":
    case "cola":
    case "tea":
        alert("Here is your " + drink);
        break;

    default:
        alert("We do not have such a drink");

}


/*  Используя prompt() спросить у посетителя какой напиток он будет пить и, 
в зависимости от выбора, проверить через switch какой напиток выбран и вывести
 в соответствии с выбором различные фразы вида "вы выбрали " + userDrink + ". Отличный выбор".
Например для алкогольных напитков одну фразу, для других - другую.
 Не забываем про default и возможность использовать несколько case для одного результата. */