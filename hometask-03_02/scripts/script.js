// //створити масив з 5 числових значень, 5 стічкових значень, 5 значень стрічкового, числового та булевого типу та вивести його в консоль//

// let firstMass = [30, 5, 1985, 7, 1997];
// console.log(firstMass);

// let secondMass = [`Oleksandr`, `chemist`, `developer`, `Arina`, `software tester`];
// console.log(secondMass);

// let thirdMass = [`Oleksandr`, 1985, `Arina`, 1997, true];
// console.log(thirdMass);


// //Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let bike = [];
// bike[1] = `mongoose`;
// bike[0] = `winner`;
// bike[2] = `scott`;
// bike[8] = `author`;
// bike[9] = `canondale`;
// console.log(bike);


// //За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let someText = [`dog`, `family`, `direct`, `pose`, `leave`, `song`, `measure`, `door`, `product`, `black`, `short`];

// for (let i = 0; i < 11; i++){
//     document.write(`<div class="some_text">${someText[i]}</div>`);
// };

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < someText.length; i++) {
//     document.write(`<div class="some_text"> There ${i} word is ${someText[i]}</div>`);
// };

// //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let text = [`billion`, `bit`, `bag`, `black`, `blood`, `blue`, `board`, `body`, `book`, `born`, `both`, `box`, `boy`, `bring`, `brother`, `budget`, `build`, `building`, `business`, `but`, `buy`];
// let i = 0;
// while (i < text.length){
//     document.write(`<h1 class="text"> ${text[i]}</h1>`);
//     i++;
// };

// //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// while (i < text.length){
//     document.write(`<h1 class="text"> ${text.indexOf(text[i])}   ${text[i]}</h1>`);
//     i++;
// };


// //Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let tenNumberArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 125];
// for (let i = 0; i<tenNumberArray.length; i++){
//     console.log(tenNumberArray);
// }

// //Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let tenStringArray = [`scotch`, `scoundrel`, `scout`, `scramble`, `scrap`, `scratch`, `scream`, `screen`, `screw`, `scribble`];
// for (let i = 0; i < tenStringArray.length; i++) {
//     console.log(tenStringArray);
// };

////Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let tenStringArray = [`scotch`, 23, `scout`, 35, `scrap`, 70, `scream`, true, `screw`, false];
// for (let i = 0; i < tenStringArray.length; i++){
// console.log(tenStringArray);
// };

// //Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let tenStringArray = [`scotch`, 23, `scout`, 35, `scrap`, 70, `scream`, true, `screw`, false];
// for (let i = 0; i < tenStringArray.length; i++){
//     if (typeof tenStringArray[i] === `boolean`){
//         console.log(tenStringArray[i])
//     };
// };

// //Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let tenStringArray = [`scotch`, 23, `scout`, 35, `scrap`, 70, `scream`, true, `screw`, false];
// for (let i = 0; i < tenStringArray.length; i++){
//     if (typeof tenStringArray[i] === `number`){
//         console.log(tenStringArray[i])
//     };
// };

// //Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let tenStringArray = [`scotch`, 23, `scout`, 35, `scrap`, 70, `scream`, true, `screw`, false];
// for (let i = 0; i < tenStringArray.length; i++){
//     if (typeof tenStringArray[i] === `string`){
//         console.log(tenStringArray[i])
//     };
// };

// // Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = `apple`;
// array[1] = `banana`;
// array[2] = 245;
// array[3] = true;
// array[4] = 890;
// array[5] = `strawbery`;
// array[6] = false;
// array[7] = 67;
// array[8] = `orange`;
// array[9] = 5;
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };


// // Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let text = [`billion`, `bit`, `bag`, `black`, `blood`, `blue`, `board`, `body`, `book`, `born`, `both`, `box`, `boy`, `bring`, `brother`, `budget`, `build`, `building`, `business`, `but`, `buy`];
// for (let i = 0; i <= 9; i++){
//  console.log(i);
//  document.write(`<div> ${text.indexOf(text[i])}</div>`);
// };

// //Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let array55 = [];
// for (let i = 0; i < 100; i++) {
//     array55[i] = i;
//     console.log(i);
//     document.write(`<div> ${array55.indexOf(array55[i])}</div>`);
// };


// // Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// let array56 = [];
// for (let i = 0; i < 100; i++) {
//     array56[i] = i;
//     console.log(i * 2);
//     let y = i * 2;
//     document.write(`<div> ${y}</div>`);
// };


// // Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let minute = 0; minute <= 2; minute++) {
//     for (let second = 0; second <= 59; second++) {
//         console.log(minute, second);
//     }
// }



// //Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let h = 0; h <= 2; h++) {
//     for (let m = 0; m < 60; m++) {
//         if (h === 2 && m === 21) break
//         for (let s = 0; s < 60; s++) {
//             document.write(`<div>${h}:${m}:${s}</div><br>`);
//             if (m === 20 && s === 0) break
//         }
//     }
// }
