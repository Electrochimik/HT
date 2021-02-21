// // - створити функцію яка виводить масив

// let array =[11,22,33,44,55,66,77,88,99];
// function printArray(arr){
//     for( let element of array){
//         console.log(element);
//     }    
// }
// printArray(array);


// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function arrayWithRandomNumber(length, min, max) {
//     let newArray = [];
//     console.log(newArray.length)
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
//     }
//     return newArray;
// }
// let random = arrayWithRandomNumber(12, 11, 59);

// function printArray(arr) {
//     for (let element of random) {
//         console.log(element);
//     }
// }
// printArray(random);

// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function giveMeMin(a, b, c) {
//     let min = a
//     if (a < b < c) {
//         min = a;
//     }
//     else
//         if (b < a & b < c) {
//             min = b
//         }
//         else
//             if (c < a & c < b) {
//                 min = c
//             }
//     return min
// }
// console.log(giveMeMin(26, 85, 123))

// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function giveMeMax(a, b, c) {
//     max = a;
//     for (const iter of arguments) {
//         iter > max && (max = iter)
//     }
//     return max
// }
// console.log(giveMeMax(98, 210, 103));
// console.log(giveMeMax([23,45,67]));

// // // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function giveMe() {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const iter of arguments) {
//         iter > max && (max = iter)
//         iter < min && (min = iter)
//     }
//     console.log('max', max);
//     return min;
// }
// let d = giveMe(98, 210, 103, 44, 67, 6, giveMe(34, 45, 54, 1))
// console.log(d);


// // - створити функцію яка виводить масив
// // - створити функцію яка повертає найбільше число з масиву
// let myMaxFunk = (myArray)=> {
//     let max = myArray[0];
//     for (const it of myArray) {
//         it > max && (max = it);
//     }
//     return max;
// }
// let myMax = myMaxFunk([33, 55, 87, 445, 32])
// console.log(myMax);


// // - створити функцію яка повертає найменьше число з масиву

// let myMinFunk = (myArray)=> {
//     let min = myArray[0];
//     for (const it of myArray) {
//         it < min && (min = it);
//     }
//     return min;
// }
// let myMin = myMinFunk([33, 55, 87, 445, 12])
// console.log(myMin);

// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sum(array) {
//     let sum = 0;
//     for (let i of array) {
//         sum += i;
//     }
//     return sum;
// }
// let mySum = sum([1, 10, 100, 1000]);
// console.log(mySum);

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arithmeticMean(array) {
//     let mean = 0;
//     for (let i of array) {
//         mean += i;
//     }
//     return mean/array.length;
// }
// let myMean = arithmeticMean([4, 20, 200, 2000]);
// console.log(myMean);


// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];
// function counter(array) {
//     let count = 0;
//     for (const item of array) {
//         if (typeof item === `object` && !Array.isArray(item))
//             count++;
//     }
//     return count;
// }
// let number = counter(users);
// console.log(number);


// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function counterField(array) {
//     let countOfFilds = 0;
//     for (const item of array) {
//         if (typeof item === `object` && !Array.isArray(item)){
//             for (const key in item) {
//                 countOfFilds++;                
//             }
//         }           
//     }
//     return countOfFilds;
// }
// let num = counterField(users);
// console.log(num);


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function comb(array1, array2) {
//     let result = [];
//     if (array1.length < array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             result.push(array1[i] + array2[i]);
//         };
//     }
//     else {
//         for (let i = 0; i < array2.length; i++) {
//             result.push(array1[i] + array2[i]);
//         }
//     }
//     return result;
// }
// let res = comb([1, 2, 3, 4, 5], [10, 20, 30, 40, 50, 60, 70]);
// console.log(res);


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

let array = [11,22,33,44,55]
function changeElement(array,index){
    i
}











// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];
// "