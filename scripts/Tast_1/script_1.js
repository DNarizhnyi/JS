/*
Code was done by Dmytro Narizhnyi. No russian-language manuals were used. I swear. So let the jorney begins here
*/

/*
Read more at
https://www.w3schools.com/jsref/met_win_prompt.asp
*/

const CONST_USER_AGE = 21;
var userName = prompt ("What is your name?"); // empty by default
console.log (userName);
var age = prompt ("How old are you?", CONST_USER_AGE); // 21 by default
console.log (age + " years old");
var salaryQuestion = confirm ("Are you satisfied with your salary?");
// https://www.w3schools.com/jsref/met_win_confirm.asp

if (salaryQuestion == false) {
alert ("Don't stop believing! You are the creator of your future!");
} //https://www.w3schools.com/js/js_if_else.asp

else {
alert ("You are lucky! Wanna share some?");
alert ("Oh, really? Thank you for pressing 'OK' ");
}
