// // - создать массив с 20 числами.
// let array = [111, 66, 33, 22, 55, 77, 44, 88, 11, 99, 500];
// console.log(array);

// // -- при помощи метода sort и колбека  отсортировать массив.
// array.sort(function (a, b) { return a - b });
// console.log(array);

// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// array.sort(function (a, b) { return b - a });
// console.log(array);

// // -- при помощи filter получить числа кратные 3
// let filteredArray = array.filter(function (arrayItem) {
//     return arrayItem % 3 === 0
// }
// )
// console.log(filteredArray);

// // -- при помощи filter получить числа кратные 10
// let filteredArray10 = array.filter(function (arrayItem) {
//     return arrayItem % 10 === 0
// }
// )
// console.log(filteredArray10);

// // -- перебрать (проитерировать) массив при помощи foreach()
// array.forEach(element => console.log(element))

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let threeTimesMore = array.map(function (item) {
//     return item * 3
// }
// )
// console.log(threeTimesMore);

// - создать массив со словами на 15-20 элементов.
let words = [`conservatory`, `Fight`, `labour`, `Potek`, `Sigher`, `0`, `snobby`, `сало`, `Steer`, `Age-old`, `anglican`,
    `baroque`, `Density`, `Golds`, `Knowledgeable`, `nature`, `quarrel`, `45`, `Sure`, `Equipment`, `Rational`, `Їдальня`]

// // -- отсортировать его по алфавиту в восходящем порядке.

// console.log(words);
// console.log(words.sort());

// let sorted = words.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     if (a.toLowerCase() < b.toLowerCase()) return -1;
//     return 0;
// }
// )
// console.log(sorted); // Їдальня і сало не правильно отсортированы!!!!

// // -- отсортировать его по алфавиту  в нисходящем порядке.
// let sorted2 = words.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) return -1;
//     if (a.toLowerCase() < b.toLowerCase()) return 1;
//     return 0;
// }
// )
// console.log(sorted2); 

// // -- отфильтровать слова длиной менее 6-ти символов
// let filtered6 = words.filter(word => word.length<6);
// console.log(filtered6);

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let maps = words.map(function (item) {
//     return item+`!`
// }
// )
// console.log(maps);

// // Все робити через функції масивів (foreach, map ...тд)
// // Дан масив :
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// console.log(users);
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
// debugger
// users.sort(function(user1, user2){
// return user1.age - user2.age;
// }
// )
// console.log(users);

// debugger
// users.sort(function(user1, user2){
// return user2.age - user1.age;
// }
// )
// console.log(users);

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort(function (user1, user2) { 
//     return user1.name.length - user2.name.length
// }
// )
// console.log(users);
// debugger
// users.sort(function (user1, user2) { 
//     return user2.name.length - user1.name.length
// }
// )
// console.log(users);

// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let workingArray = JSON.parse(JSON.stringify(users));
// let usersModefied = workingArray.map((user, id) => {
//     user.id = ++id;
//     return user
// }
// )
// console.log(usersModefied)

// // - відсортувати його за індентифікатором
// usersModefied.sort(function (a, b) {
//     return b.id - a.id;
// }
// )
// console.log(usersModefied);

// // -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator(a, b, callback) {
//     return callback(a, b);
// }
// let res = calculator(3, 5, (a, b) => (a * b) / (b - a));
// console.log(res)

// // -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator1(a, b, c, callback) {
//     return callback(a, b, c);
// }
// let res1 = calculator1(2, 3, 5, (a, b, c) => (a * b*c) - (a * c));
// console.log(res1)
