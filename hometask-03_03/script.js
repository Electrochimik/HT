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


// // -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// //  За допомогою document.createElement вивести їх в браузер. 
// //  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())
//     .then(users => {
//         // console.log(users);
//         for (const item of users) {
//             // console.log(item);
//             let userWrap = document.createElement('div');
//             let userId = document.createElement('h3');
//             let userName = document.createElement('h2');
//             let userEmail = document.createElement('p');

//             userId.innerText= item.id;
//             // console.log(item.id);
//             userName.innerText= item.name;
//             // console.log(item.name);
//             userEmail.innerText= item.email;
//             // console.log(item.email);
//             userWrap.appendChild (userId);
//             userWrap.appendChild (userName);
//             userWrap.appendChild (userEmail);
//             // console.log(userWrap)
//             document.body.appendChild(userWrap);
//         };
//     })


// // - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
// // За допомогою document.createElement вивести їх в браузер. 
// // Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(posts => {
//         // console.log(posts);
//         for (const post of posts) {
//             // console.log(post);
//             let postWrap = document.createElement('div');
//             let postUserId = document.createElement('h3');
//             let postId = document.createElement('h4');
//             let postTitle = document.createElement('h2');
//             let postBody = document.createElement('p');
//             postUserId.innerText=post.userId;
//             postId.innerText=post.id;
//             postTitle.innerText=post.title;
//             postBody.innerText=post.body;
//             postWrap.appendChild(postUserId);
//             postWrap.appendChild(postId);
//             postWrap.appendChild(postTitle);
//             postWrap.appendChild(postBody);
//             // console.log(postWrap);
//             document.body.appendChild(postWrap);
//         }
//     });


// // - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
// // За допомогою document.createElement вивести їх в браузер. 
// // Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then(response => response.json())
//     .then(comments => {
//         // console.log(comments);
//         for (const comment of comments) {
//             // console.log(comment);
//             let commentWrap = document.createElement('div');
//             let commentPostId = document.createElement('h3');
//             let commentId = document.createElement('h4');
//             let commentName = document.createElement('h2');
//             let commentEmail = document.createElement('h5');
//             let commentBody = document.createElement('p');
//             commentPostId.innerText = comment.postId;
//             commentId.innerText = comment.id;
//             commentName.innerText = comment.name;
//             commentEmail.innerText = comment.email;
//             commentBody.innerText = comment.body;
//             commentWrap.appendChild(commentPostId);
//             commentWrap.appendChild(commentId);
//             commentWrap.appendChild(commentName);
//             commentWrap.appendChild(commentEmail);
//             commentWrap.appendChild(commentBody);
//             document.body.appendChild(commentWrap);
//         }
//     });


// -при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response => response.json())
.then(posts => {
    // console.log(posts);
    for (const post of posts) {
        // console.log(post)
        post.comments = [];
        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                if (post.id === comment.postId) {
                    post.comments.push(comment);
                }
            }
            // console.log(post);
            let postWrap = document.createElement('div');
            let postId = document.createElement('h4');
            let postTitle = document.createElement('h2');                       
            postId.innerText=post.id;
            postTitle.innerText=post.title;
            let postCommets = document.createElement('ol');
            for (const comment of post.comments) {
                let commentBody = document.createElement('li');
                commentBody.innerText = comment.body;
                postCommets.appendChild(commentBody);                
            }      
            postWrap.appendChild(postId);
            postWrap.appendChild(postTitle);
            postWrap.appendChild(postCommets);           
            // console.log(postWrap);
            document.body.appendChild(postWrap);
        })
    }
})