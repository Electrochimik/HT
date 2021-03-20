// // - Реалізувати друкарську машинку. 
// // У вас є текст "Hello World".
// // Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// // КОЖНА нова буква має бути з РАНДОМНОЮ затримкою від 0.1 до 1 секунди.
// // Цим самим ви маєте симулювати написання даного тексту юзером. 
// // Приклад: "Hello"
// // Затримки: 
// // H (затримка 0.6)
// // e (затримка 0.1)
// // l (затримка 0.3)
// // l (затримка 0.7)
// // о (затримка 1)

// setTimeout(() => {
//     console.log(`H`);
//     setTimeout(() => {
//         console.log(`e`);
//         setTimeout(() => {
//             console.log(`l`);
//             setTimeout(() => {
//                 console.log(`l`);
//                 setTimeout(() => {
//                     console.log(`o`);
//                     setTimeout(() => {
//                         console.log(``);
//                         setTimeout(() => {
//                             console.log(`W`);
//                             setTimeout(() => {
//                                 console.log(`o`);
//                                 setTimeout(() => {
//                                     console.log(`r`);
//                                     setTimeout(() => {
//                                         console.log(`l`);
//                                         setTimeout(() => {
//                                             console.log(`d`);
//                                         }, 300)
//                                     }, 150)
//                                 }, 900)
//                             }, 200)
//                         }, 450)
//                     }, 700)
//                 }, 200)
//             }, 100)
//         }, 500)
//     }, 600)
// }, 900)


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// console.log(`H`);
// sleep(Math.random(100, 1000)).then(() => { console.log("e"); });
// sleep(Math.random(100, 1000)).then(() => { console.log("l"); });
// sleep(Math.random(100, 1000)).then(() => { console.log("l"); });
// sleep(Math.random(100, 1000)).then(() => { console.log("o"); });
// sleep(Math.random(100, 1000)).then(() => { console.log(" "); });
// sleep(Math.random(100, 1000)).then(() => { console.log("W"); });
// sleep(Math.random(100, 1000)).then(() => { console.log("o"); });
// sleep(Math.random(100, 1000)).then(() => { console.log("r"); });
// sleep(Math.random(100, 1000)).then(() => { console.log("l"); });
// sleep(Math.random(100, 1000)).then(() => { console.log("d"); });


// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('H');
//     }, 200);

// }
// );

// promise.then((result) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(result);
//             resolve(result + 'e');
//         }, 1000);
//     });
// })
//     .then((result) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + 'l');
//             }, 900);
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + 'l');
//             }, 100);
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + 'o');
//             }, 250);
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + ' ');
//             }, 800);
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(result + 'W');
//             });
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + 'o');
//             }, 600);
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + 'r');
//             }, 400);
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + 'l');
//             }, 500);
//         });
//     }
//     )
//     .then((result) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log(result);
//                 resolve(result + 'd');
//             }, 300);
//         });
//     }
//     )
//     .then(value => {
//         setTimeout(() => {
//             console.log(value);
//         }, 250);
//     }
//     )


// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//  За допомогою document.createElement вивести їх в браузер. 
//  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        console.log(users);
        for (const item of users) {
            console.log(item);

        }
    })







// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// -при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту


// часть из них уже кто-то делал , так вот, пофиг , что авы их уже делали, делаем еще раз, не копипастим!!!!!!!!!!! >:-()


