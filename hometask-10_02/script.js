// 1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let human = {
    name: 'Max',
    surname: 'Mad',
    age: '35'
}

let dog = {
    breed: 'labrador',
    color: 'send',
    udult: 'male'
}

let film = {
    genre: 'action',
    year: 2000,
    duration: 120
}

let sport = {
    type: 'football',
    playTeam: true,
    playerNumber: 11
}

let home = {
    district: 'Darnytsya',
    floor: 18,
    roomNumber: 3
}

// 2- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... 
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let subjects = {
    maths: ['algebra', 'geometry'],
    physics: ['optics', 'electrodynamics', 'magnetics'],
    chemistry: [
        physicalChemistry = {
            sections: 3,
            timeToStudy: 600,
            level: 'hard'
        },
        organicChemistry = {
            sections: 2,
            timeToStudy: 400,
            level: 'very_hard'
        }
    ]
}

let man = {
    name: 'Max',
    profession: ['driver', 'mechanic', 'handyman'],
    wife: {
        name: 'Suzi',
        heirColor: 'Blondie'
    }
}

let transport = {
    type: ['personal', 'public'],
    underground: {
        fuel: 'electric',
        carNumber: 5,
        stationNumber: 55,
        availability: 'public'
    },
    airplane: ['Airbus', 'Boeing', 'An', 'Tu']
}

let art = {
    cinema: ['comedy', 'thriller', 'horror', 'adventure'],
    theater: ['drama', 'comedy', 'utopia'],
    painting: {
        style: 'cubism',
        representative: 'Pablo Picasso',
        direction: 'modern'
    }
}

let bicycle = {
    frameset: ['frame', 'fork'],
    transmision: {
        system: '2x10',
        wheel: 29,
        tire: '29x2.2'
    },
    size: 'L'
}

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
let cars = [
    lancer = {
        producer: 'matsubishi',
        year: 2008,
        power: 320,
        color: 'blue'
    },
    bora = {
        producer: 'wv',
        year: 2020,
        power: 2900,
        color: 'silver'
    },
    jetta = {
        producer: 'wv',
        year: 2018,
        power: 300,
        color: 'black'
    },
    passat = {
        producer: 'wv',
        year: 2000,
        power: 190,
        color: 'white'
    },
    octavia = {
        producer: 'skoda',
        year: 2020,
        power: 125,
        color: 'green'
    },
    skyliner = {
        producer: 'nissan',
        year: 2014,
        power: 260,
        color: 'purple'
    },
    impresa = {
        producer: 'subaru',
        year: 2018,
        power: 500,
        color: 'red'
    },
    sonata = {
        producer: 'hyundai',
        year: 2014,
        power: 220,
        color: 'brown'
    },
    elantra = {
        producer: 'hyundai',
        year: 2012,
        power: 130,
        color: 'white'
    },
    accent = {
        producer: 'hyundai',
        year: 2008,
        power: 90,
        color: 'blue'
    }
]

// 6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [
    num1 = {
        title: 'Kyiv',
        population: 6000000,
        country: 'Ukraine',
        region: 'Europe'
    },
    num2 = {
        title: 'Odesa',
        population: 2000000,
        country: 'Ukraine',
        region: 'Europe'
    },
    num3 = {
        title: 'Lviv',
        population: 1500000,
        country: 'Ukraine',
        region: 'Europe'
    },
    num4 = {
        title: 'Rome',
        population: 10000000,
        country: 'Italy',
        region: 'Europe'
    },
    num5 = {
        title: 'Berlin',
        population: 7000000,
        country: 'Germany',
        region: 'Europe'
    },
    num6 = {
        title: 'London',
        population: 13000000,
        country: 'Great Britain',
        region: 'Europe'
    },
    num7 = {
        title: 'Tokio',
        population: 7000000,
        country: 'Japan',
        region: 'Asia'
    },
    num8 = {
        title: 'Pekin',
        population: 20000000,
        country: 'China',
        region: 'Asia'
    },
    num9 = {
        title: 'Canberra',
        population: 25000000,
        country: 'Australia',
        region: 'Australia and Oceania'
    },
    num10 = {
        title: 'Cairo',
        population: 9500000,
        country: 'Egypt',
        region: 'Africa'
    }
]
// 7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars2 = [
    renault = {
        model: `symbol`,
        year: 1998,
        power: 105,
        color: `metallic`,
        driver: {
            name: `vasya`,
            age: 26,
            adult: `male`,
            experience: 3
        }
    },
    pegault = {
        model: 406,
        year: 2008,
        power: 115,
        color: `green`,
        driver: {
            name: `ova`,
            age: 29,
            adult: `male`,
            experience: 7
        }
    },
    opel = {
        model: `astra`,
        year: 2018,
        power: 135,
        color: `white`,
        driver: {
            name: `olya`,
            age: 32,
            adult: `female`,
            experience: 5
        }
    },
    wv = {
        model: `passat`,
        year: 2020,
        power: 150,
        color: `black`,
        driver: {
            name: `yana`,
            age: 23,
            adult: `female`,
            experience: 1
        }
    },
    bentley = {
        model: `Continental`,
        year: 2019,
        power: 305,
        color: `metallic`,
        driver: {
            name: `kolya`,
            age: 48,
            adult: `male`,
            experience: 20
        }
    },
]

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



// 17- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив