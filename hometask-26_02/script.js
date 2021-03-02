// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let someDiv = document.getElementById('text');
// let displayNone = document.getElementById('target');
// displayNone.addEventListener(`click`, () => {
//     someDiv.style.display = 'none'
// }
// )


// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let displayNone = document.getElementById('target');
// displayNone.addEventListener(`click`, () => {
//     displayNone.style.display = 'none'
// }
// )


// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let btn = document.getElementById('confirm');
// btn.addEventListener('click', () => {
//     let userAge = document.getElementById('userAge');
//     let age = userAge.value;
//     // console.log(age);
//     if (age > 0 && age <= 18) {
//         alert('Ви не повнолітній. Вам сюди не можна')
//     }
//     else {
//         alert('Ласкаво просимо!!!')
//     }
// }
// )


// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// let comments = [
//     {
//         title: 'vasya', body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eveniet aperiam hic quaerat sit! Debitis eos illum perspiciatis voluptatibus? Odio.`
//     },
//     { title: 'petya', body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quidem. Eius voluptatibus error voluptatem recusandae.` },
//     { title: 'kolya', body: `Lorem ipsum dolor sit amet.` },
//     { title: 'olya', body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex id rerum soluta.` },
//     { title: 'max', body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, facere? Laudantium, nesciunt voluptate eos nostrum quaerat maxime magnam.` },
//     { title: 'anya', body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quam voluptatibus dolorum natus facere.` },
//     { title: 'oleg', body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, unde. Inventore, provident.` },
//     { title: 'andrey', body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.` },
//     { title: 'masha', body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa hic necessitatibus!` },
//     { title: 'olya', body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ducimus dicta?` },
//     { title: 'max', body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam quasi quisquam quod.` }
// ]
// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let com = document.getElementById('com_list');
// comments.forEach(item => {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     btn.innerText = `Hide`;
//     btn.onclick = () => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//     };
//     h2.innerText = item.title;
//     p.innerText = item.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(btn);
//     com.appendChild(div);
// }
// )


// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let swears = [`Блядь`,
    `Блядство`,
    `Выебать`,
    `Ебать`,
    `Еблан`,
    `Заебал`,
    `Иди на хуй`,
    `Манда`,
    `Наебка`,
    `Отъебись`,
    `Пизда`,
    `Пидарас`,
    `Пиздец`,
    `Проебать`,
    `Распиздяй`,
    `Сука`,
    `Трахать`,
    `Уебок`,
    `Уебан`,
    `Хуй`,
    `Хуйня`,
    `Членосос`,
    `Шлюха`];
let swearCheck = document.getElementById(`verification`);
swearCheck.addEventListener('click', () => {
    let words = document.getElementById(`stop_swears`);
    let word = words.value;
    for (let key of swears) {
        if (key == word) {
            words.value = "";                              
            setTimeout(() =>{
                alert('Ненормативна лексика!!!!')
            },200)
        }
    }
}
)
