//First Task//

let gratting = 'hello';
let school = 'owu';
let domen = 'com';
let nativeDomen = 'ua';
let num = 1;
let numSecond = 10;
let someNum = -999;
let schoolNumber = 123;
let pi = 3.14;
let e = 2.7;
let age = 16;
let status = true;
let status2 = false;

console.log(gratting);
console.log(school);
console.log(domen);
console.log(nativeDomen);
console.log(num);
console.log(numSecond);
console.log(someNum);
console.log(schoolNumber);
console.log(pi);
console.log(e);
console.log(age);
console.log(status);
console.log(status2);

alert(gratting);
alert(school);
alert(domen);
alert(nativeDomen);
alert(num);
alert(numSecond);
alert(someNum);
alert(schoolNumber);
alert(pi);
alert(e);
alert(age);
alert(status);
alert(status2);

document.write(gratting + '<br>');
document.write(school + '<br>');
document.write(domen + '<br>');
document.write(nativeDomen + '<br>');
document.write(num + '<br>');
document.write(numSecond + '<br>');
document.write(someNum + '<br>');
document.write(schoolNumber + '<br>');
document.write(pi + '<br>');
document.write(e + '<br>');
document.write(age + '<br>');
document.write(status + '<br>');
document.write(status2 + '<br>');


//Second Task//

greeting = 'alloha';
console.log(greeting);
alert(greeting);
document.write(greeting + '<br>');

let school = 'teach-yourself';
console.log(school);
alert(school);
document.write(school + '<br>');

let domen = 'net';
console.log(domen);
alert(domen);
document.write(domen + '<br>');

let nativeDomen = 'org';
console.log(nativeDomen);
alert(nativeDomen);
document.write(nativeDomen + '<br>');

let num = 2;
console.log(num);
alert(num);
document.write(num + '<br>');

let numSecond = 15;
console.log(numSecond);
alert(numSecond);
document.write(numSecond + '<br>');

let someNum = -2000;
console.log(someNum);
alert(someNum);
document.write(someNum + '<br>');

let schoolNumber = 125;
console.log(schoolNumber);
alert(schoolNumber);
document.write(schoolNumber + '<br>');

let pi = 3.1415926535;
console.log(pi);
alert(pi);
document.write(pi + '<br>');

let e = 2.7182818284;
console.log(e);
alert(e);
document.write(e + '<br>');

let age = 35;
console.log(age);
alert(age);
document.write(age + '<br>');

let status = 'verity';
console.log(status);
alert(status);
document.write(status + '<br>');

let status2 = 'unverity';
console.log(status2);
alert(status2);
document.write(status2 + '<br>');


// Third Task //

let your_name = prompt("Ваше Ім'я");
let your_patronymic = prompt("Ваше По-батькові");
let your_age = prompt("Ваш Вік");
console.log('Вітаю ' + your_name + ' ' + your_patronymic + ". Тобі " + your_age + " років.");
alert('Вітаю ' + your_name + ' ' + your_patronymic + ". Тобі " + your_age + " років.");
document.write('Вітаю ' + your_name + ' ' + your_patronymic + ". Тобі " + your_age + " років.");


// Fourth Task //

let fullName = your_name + your_patronymic;
console.log(fullName);
alert(fullName);
document.write(fullName + '<br>');

let epi = e + pi;
console.log(epi);

let mySchool = school + schoolNumber;
console.log(mySchool);


// Fifth Task//

// 5-1//
let num501 = prompt("Введи число");
let num502 = prompt("Введи ще одне число");
let num503 = prompt("Ну і ще одне, будь-ласка");

Number(num501);
Number(num502);
Number(num503);

console.log(num501);
console.log(num502);
console.log(num503);

console.log(Number(num501));
console.log(Number(num502));
console.log(Number(num503));

// 5-2//
let num511 = prompt("Введи число");
let num512 = prompt("Введи ще одне число");
let num513 = prompt("Введи число знов");
let num514 = prompt("І останнє");

let sum = parseInt(num511) + parseInt(num512) + parseInt(num513) + parseInt(num514);
console.log(sum);

// 5-3//
let num521 = prompt("Введи число");
let num522 = prompt("Введи ще одне число");
let num523 = prompt("Введи число знов");

let result = parseFloat(num521) + parseFloat(num522) + parseFloat(num523);
console.log(result);

// 5-4//
let num531 = prompt("Введи число");
let num532 = prompt("Введи ще одне число");
let num533 = prompt("Введи число знов");

let sum530 = Math.floor(num531) + Math.ceil(num532) + Math.round(num533);
console.log(sum530);

// 5-5//
let num541 = prompt("Введи число");
let num542 = prompt("Введи ще одне число");

let result54 = Math.pow(num541, num542);
console.log(result54);

// 5-6//
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 5-7//
let compare = true;
compare = 5 < 6;
console.log(compare);

let compare_1 = false;
compare_1 = 5 > 6;
console.log(compare_1);

let compare_2 = false;
compare_2 = 5 == 6;
console.log(compare_2);

let compare_3 = false;
compare_3 = 5 >= 6;
console.log(compare_3);

let compare_10 = true;
compare_10 = 10 == 10;
console.log(compare_10);

let compare_11 = true;
compare_11 = 10 <= 10;
console.log(compare_11);

let compare_12 = false;
compare_12 = 10 < 10;
console.log(compare_12);

let compare_13 = false;
compare_13 = 10 > 10;
console.log(compare_13);

let compare_14 = false;
compare_14 = 10 != 10;
console.log(compare_14);

let compare_20 = false;
compare_20 = 123 === '123';
console.log(compare_20);

let compare_21 = true;
compare_21 = 123 !== '123';
console.log(compare_21);


// Add Task//
console.log(132 > 100 && 45 < 12);                                          //1//
console.log(34 > 33 && 23 < 90);                                            //2//
console.log(99 > 100 && 45 > 12);                                           //3//
console.log(132 > 100 || 45 < 12);                                          //4//
console.log(111 > 11 || 45 < 111);                                          //5//
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));              //6//
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));               //7//
console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12));              //8//
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));               //9//
console.log(!!'-1');                                                        //10//     не понятно//
console.log(!!-1);                                                          //11//     не понятно//
console.log(!!'0');                                                         //12//
console.log(!!'null');                                                      //13//
console.log(!!'undefined');                                                 //14//
console.log(!!(3 / 'owu'));                                                 //15//
console.log((111 > 11 || 45 < 111) || !!'0');                               //16//
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));          //17//