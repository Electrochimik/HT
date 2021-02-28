// // 1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let human = {
//     name: 'Max',
//     surname: 'Mad',
//     age: '35'
// }

// let dog = {
//     breed: 'labrador',
//     color: 'send',
//     udult: 'male'
// }

// let film = {
//     genre: 'action',
//     year: 2000,
//     duration: 120
// }

// let sport = {
//     type: 'football',
//     playTeam: true,
//     playerNumber: 11
// }

// let home = {
//     district: 'Darnytsya',
//     floor: 18,
//     roomNumber: 3
// }

// // 2- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... 
// // Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let subjects = {
//     maths: ['algebra', 'geometry'],
//     physics: ['optics', 'electrodynamics', 'magnetics'],
//     chemistry: [
//         physicalChemistry = {
//             sections: 3,
//             timeToStudy: 600,
//             level: 'hard'
//         },
//         organicChemistry = {
//             sections: 2,
//             timeToStudy: 400,
//             level: 'very_hard'
//         }
//     ]
// }

// let man = {
//     name: 'Max',
//     profession: ['driver', 'mechanic', 'handyman'],
//     wife: {
//         name: 'Suzi',
//         heirColor: 'Blondie'
//     }
// }

// let transport = {
//     type: ['personal', 'public'],
//     underground: {
//         fuel: 'electric',
//         carNumber: 5,
//         stationNumber: 55,
//         availability: 'public'
//     },
//     airplane: ['Airbus', 'Boeing', 'An', 'Tu']
// }

// let art = {
//     cinema: ['comedy', 'thriller', 'horror', 'adventure'],
//     theater: ['drama', 'comedy', 'utopia'],
//     painting: {
//         style: 'cubism',
//         representative: 'Pablo Picasso',
//         direction: 'modern'
//     }
// }

// let bicycle = {
//     frameset: ['frame', 'fork'],
//     transmision: {
//         system: '2x10',
//         wheel: 29,
//         tire: '29x2.2'
//     },
//     size: 'L'
// }

// // 3- При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let property in human) {
//     console.log(property)
// };

// for (let property in dog) {
//     console.log(property)
// };

// for (let property in film) {
//     console.log(property)
// };

// for (let property in sport) {
//     console.log(property)
// };

// for (let property in home) {
//     console.log(property)
// };

// for (let property in subjects) {
//     console.log(property)
// };

// for (let property in man) {
//     console.log(property)
// };

// for (let property in transport) {
//     console.log(property)
// };

// for (let property in art) {
//     console.log(property)
// };

// for (let property in bicycle) {
//     console.log(property)
// };

// // 4- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(human));
// console.log(Object.keys(dog));
// console.log(Object.keys(film));
// console.log(Object.keys(sport));
// console.log(Object.keys(home));
// console.log(Object.keys(subjects));
// console.log(Object.keys(man));
// console.log(Object.keys(transport));
// console.log(Object.keys(art));
// console.log(Object.keys(bicycle));

// 5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//     lancer = {
//         producer: 'matsubishi',
//         year: 2008,
//         power: 320,
//         color: 'blue'
//     },
//     bora = {
//         producer: 'wv',
//         year: 2020,
//         power: 2900,
//         color: 'silver'
//     },
//     jetta = {
//         producer: 'wv',
//         year: 2018,
//         power: 300,
//         color: 'black'
//     },
//     passat = {
//         producer: 'wv',
//         year: 2000,
//         power: 190,
//         color: 'white'
//     },
//     octavia = {
//         producer: 'skoda',
//         year: 2020,
//         power: 125,
//         color: 'green'
//     },
//     skyliner = {
//         producer: 'nissan',
//         year: 2014,
//         power: 260,
//         color: 'purple'
//     },
//     impresa = {
//         producer: 'subaru',
//         year: 2018,
//         power: 500,
//         color: 'red'
//     },
//     sonata = {
//         producer: 'hyundai',
//         year: 2014,
//         power: 220,
//         color: 'brown'
//     },
//     elantra = {
//         producer: 'hyundai',
//         year: 2012,
//         power: 130,
//         color: 'white'
//     },
//     accent = {
//         producer: 'hyundai',
//         year: 2008,
//         power: 90,
//         color: 'blue'
//     }
// ]

// // 6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     num1 = {
//         title: 'Kyiv',
//         population: 6000000,
//         country: 'Ukraine',
//         region: 'Europe'
//     },
//     num2 = {
//         title: 'Odesa',
//         population: 2000000,
//         country: 'Ukraine',
//         region: 'Europe'
//     },
//     num3 = {
//         title: 'Lviv',
//         population: 1500000,
//         country: 'Ukraine',
//         region: 'Europe'
//     },
//     num4 = {
//         title: 'Rome',
//         population: 10000000,
//         country: 'Italy',
//         region: 'Europe'
//     },
//     num5 = {
//         title: 'Berlin',
//         population: 7000000,
//         country: 'Germany',
//         region: 'Europe'
//     },
//     num6 = {
//         title: 'London',
//         population: 13000000,
//         country: 'Great Britain',
//         region: 'Europe'
//     },
//     num7 = {
//         title: 'Tokio',
//         population: 7000000,
//         country: 'Japan',
//         region: 'Asia'
//     },
//     num8 = {
//         title: 'Pekin',
//         population: 20000000,
//         country: 'China',
//         region: 'Asia'
//     },
//     num9 = {
//         title: 'Canberra',
//         population: 25000000,
//         country: 'Australia',
//         region: 'Australia and Oceania'
//     },
//     num10 = {
//         title: 'Cairo',
//         population: 9500000,
//         country: 'Egypt',
//         region: 'Africa'
//     }
// ]
// // 7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// //  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars2 = [
//     renault = {
//         model: `symbol`,
//         year: 1998,
//         power: 105,
//         color: `metallic`,
//         driver: {
//             name: `vasya`,
//             age: 26,
//             adult: `male`,
//             experience: 3
//         }
//     },
//     pegault = {
//         model: 406,
//         year: 2008,
//         power: 115,
//         color: `green`,
//         driver: {
//             name: `ova`,
//             age: 29,
//             adult: `male`,
//             experience: 7
//         }
//     },
//     opel = {
//         model: `astra`,
//         year: 2018,
//         power: 135,
//         color: `white`,
//         driver: {
//             name: `olya`,
//             age: 32,
//             adult: `female`,
//             experience: 5
//         }
//     },
//     wv = {
//         model: `passat`,
//         year: 2020,
//         power: 150,
//         color: `black`,
//         driver: {
//             name: `yana`,
//             age: 23,
//             adult: `female`,
//             experience: 1
//         }
//     },
//     bentley = {
//         model: `Continental`,
//         year: 2019,
//         power: 305,
//         color: `metallic`,
//         driver: {
//             name: `kolya`,
//             age: 48,
//             adult: `male`,
//             experience: 20
//         }
//     },
// ]

// // 8- проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0; 
// while (i < cars.length) {
//     console.log(cars[i])
//     i++;
// };

// let j = 0; 
// while (j < cities.length) {
//     console.log(cities[j])
//     j++;
// };

// let k = 0; 
// while (k < cars2.length) {
//     console.log(cars2[k])
//     k++;
// };

// // 9- проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let index = 0; index < cars.length; index++) {
//     console.log(cars[index])
// };

// for (let ind = 0; ind < cities.length; ind++) {
//     console.log(cars[ind])
// };

// for (let x = 0; x < cars2.length; x++) {
//     console.log(cars2[x])
// }

// // 10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let y of cars) {
//     console.log(y)
// };

// for (let z of cities) {
//     console.log(z)
// };

// for (let w of cars2) {
//     console.log(w)
// };


// // 11- взять объекты из задания 1 и превратить каждый в json.
// let jsonHuman = JSON.stringify(human);
// console.log(jsonHuman);

// let jsonDog = JSON.stringify(dog);
// console.log(jsonDog);

// let jsonFilm = JSON.stringify(film);
// console.log(jsonFilm);

// let jsonSport = JSON.stringify(sport);
// console.log(jsonSport);

// let jsonHome = JSON.stringify(home);
// console.log(jsonHome);


// // 12- взять json из задания 11 и превратить их обратно в объекты.

// let convertHuman = JSON.parse(jsonHuman)
// console.log(convertHuman);

// let convertDog = JSON.parse(jsonDog)
// console.log(convertDog);

// let convertFilm = JSON.parse(jsonFilm)
// console.log(convertFilm);

// let convertSport = JSON.parse(jsonSport)
// console.log(convertSport);

// let convertHome = JSON.parse(jsonHome)
// console.log(convertHome);

// // 13- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let key = 0; key < cars.length; key++) {
//     let car = cars[key];
//     console.log(JSON.stringify(car))
// }

// // 14- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let abc = 0; abc < cities.length; abc++) {
//     let city = cities[abc];
//     console.log(JSON.stringify(city))
// }

// // 15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newAuto = [];
// for (let qwer = 0; qwer < cars2.length; qwer++) {
//     let auto = cars2[qwer];
//     newAuto.push(JSON.stringify(auto));
// }
// console.log(newAuto)

// 16- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     skills: [`js`, `java`]
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: [`html`, `css`, `scss`]
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     skills: [`css`, `scss`, `sass`]
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: [`java`, `pyton`]
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     skills: [`c++`, `c#`]
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     skills: [`scrum`, `agile`]
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     skills: [`html`, `css`, `bootstrap`]
// }];

// for( let user of users){
//     console.log(user)
//     console.log(`Name: `, user.name)
//     for(let skill of user.skills){
//         console.log(skill)
//     }
// }

// // 17- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// // Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. 
// // Скопировать все skills всех пользователей в отедльный массив

// let allSkills = [];
// for( let user of users){
//     for(let skillAll of user.skills){
//         allSkills.push(skillAll)
//     }
// }
// console.log(allSkills)

// - За допомогою 2х циклів проітеррувати даний масив і масив кожного об'єкта.
// let users = [{
//     name: 'vasya', age: 31, status: false, skills: ['java', 'js']
// },
// {
//     name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']
// },
// {
//     name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']
// },
// {
//     name: 'olya', age: 28, status: false, skills: ['java', 'js']
// },
// {
//     name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']
// }
// ];

// for (let user of users) {
//     console.log(user)
//     console.log(`Name: `, user.name)
//     for (let skill of user.skills) {
//         console.log(skill)
//     }
// }
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let addressBook = [];
// for (let user of users) {
//     addressBook.push(user.address)
// }
// console.log(addressBook)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let i = 0; i < users.length; i++) {
// let user = users[i];
// let div = document.createElement("div");
// div.innerText = `${user.name} ${user.age} ${user.status}`;
// document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let div1 = document.createElement("div");
//     let div2 = document.createElement(`div`);
//     let div3 = document.createElement("div");
//     let div4 = document.createElement("div");
//     let add = ``
//     for (let add1 in user.address) {
//         add = add + ` ` + user.address[add1]
//     }
//     console.log(add);
//     div2.innerText = user.name;
//     div3.innerText = user.age;
//     div4.innerText = add;
//     div1.appendChild(div2);
//     div1.appendChild(div3);
//     div1.appendChild(div4);

//     document.body.appendChild(div1);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let div1 = document.createElement('div.user');
//     let name = document.createElement(`div.user_name`);
//     let age = document.createElement("div.user_age");
//     let status = document.createElement("div.user_status");
//     let address = document.createElement("div.user_address");

//     for (let add1 in user.address) {
//         let temp = document.createElement(`div`);
//         temp.innerHTML = user.address[add1];
//         address.appendChild(temp)
//     }

//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//     div1.appendChild(name);
//     div1.appendChild(age);
//     div1.appendChild(status);
//     div1.appendChild(address);

//     document.body.appendChild(div1);
// }

// // - Дано 2 масиви з рівною кількістю об'єктів.

// let usersWithId = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false
// },
// {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// },
// {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
// },
// {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false
// },
// ];

// let citiesWithId = [{
//     user_id: 3,
//     country: 'USA',
//     city: 'Portland'
// },
// {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// },
// {
//     user_id: 2,
//     country: 'Poland',
//     city: 'Krakow'
// },
// {
//     user_id: 4,
//     country: 'USA',
//     city: 'Miami'
// },
// ];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id". Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;            
//         }
//     }
// }
// console.log(usersWithId)

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag

// let elementById = document.getElementById(`content`);
// let innerText = elementById.innerText;
// console.log(innerText)

// let elementsByClassName = document.getElementsByClassName(`rules`);
// for (let element of elementsByClassName) {
//     element.innerText = `lorem`;
//     console.log(element)
// }

// let elementsByTagName = document.getElementsByTagName(`h2`);
// for (let element of elementsByTagName) {
//     element.innerText = `lorem ipsum`;
//     console.log(element)
// }
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elementId = document.getElementById(`content`);
// let text = elementId.innerText;
// elementId.innerText = `bla bla bla`;
// elementId.style.width = `400px`;
// elementId.style.height = `150px`;

// let elementsByClassName = document.getElementsByClassName(`rules`);
// for (let element of elementsByClassName) {
//     element.style.width = `400px`;
//     element.style.height = `150px`;    
// }

// let elementsByTagName = document.getElementsByTagName(`h2`);
// for (let element of elementsByTagName) {   
//     element.style.width = `400px`;
//     element.style.height = `150px`
// }


// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement(`table`);
// let tr = document.createElement(`tr`);
// let td = document.createElement(`td`);
// let td2 = document.createElement(`td2`);
// let td3 = document.createElement(`td3`);

// tr.appendChild(td);
// tr.appendChild(td2);
// tr.appendChild(td3);

// table.appendChild(tr);

// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement(`table`);

// for (let tr = 0; tr < 10; tr++) {
//     let tr = document.createElement(`tr`);
//     for (let td = 0; td < 3; td++) {
//         let td = document.createElement(`td`);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let n = prompt('Яку кількість рядків в таблиці бажаєте?')
// let m = prompt('Яку кількість комірок в рядку бажаєте?')
// let table = document.createElement(`table`);
// for (let tr = 0; tr < n; tr++) {
//     let tr = document.createElement(`tr`);
//     for (let td = 0; td < m; td++) {
//         let td = document.createElement(`td`);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table)

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// let element = document.getElementsByTagName(`*`);
// for (let tag of element){
//     if(tag.getAttribute(`class`)){
//         console.log(tag);
//     }
// }

// let element = document.getElementsByTagName(`p`);
// for (let par of element) {
//     par.innerText = `hello oktenweb!`
// }

// let element = document.getElementsByTagName(`div`);
// for (let d of element) {
//     d.style.backgroundColor = `red`
// }
