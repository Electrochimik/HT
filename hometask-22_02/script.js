// // ==============================================
// // -  Створити функцію конструктор для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru

// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
// //  Приклад результату
// //    {
// //         titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //         attrs: [
// //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //         {/*some props and values*/},
// //         {/*...*/},
// //         {/*...*/},
// //         ]
// //    }
// // ==============================================
// function TagDescript(tagName, tagDescription, attrArray) {
//     this.tagName = tagName;
//     this.tagDescription = tagDescription;
//     this.attrArray = attrArray;
// }


// let titleA = `<a>`;
// let descriptionA = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. 
// В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. 
// Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. 
// При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.
// Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку. 
// В качестве значения атрибута href используется адрес документа (URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. 
// Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где прописана ссылка. 
// Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.`;
// let atributesA = [
//     {
//         atributeTitle: `download`,
//         atributeSpecification: `Предлагает скачать указанный по ссылке файл.`
//     },
//     {
//         atributeTitle: `href`,
//         atributeSpecification: `Задает адрес документа, на который следует перейти.`
//     },
//     {
//         atributeTitle: `type`,
//         atributeSpecification: `Указывает MIME-тип документа, на который ведёт ссылка.`
//     }
// ];
// let a = new TagDescript(titleA, descriptionA, atributesA);


// let titleDiv = `<div>`;
// let descriptionDiv = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. 
// Как правило, вид блока управляется с помощью стилей. 
// Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.
// Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.`;
// let atributesDiv = [
//     {
//         atributeTitle: `align`,
//         atributeSpecification: `Задает выравнивание содержимого тега <div>.`
//     },
//     {
//         atributeTitle: `title`,
//         atributeSpecification: `Добавляет всплывающую подсказку к содержимому.`
//     }
// ];
// let div = new TagDescript(titleDiv, descriptionDiv, atributesDiv);


// let titleH1 = `<h1>`;
// let descriptionH1 = `HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. 
// Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. 
// По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. 
// Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. 
// Кроме того, перед заголовком и после него добавляется пустое пространство.`;
// let atributesH1 = [
//     {
//         atributeTitle: `align`,
//         atributeSpecification: `Определяет выравнивание заголовка.`
//     }
// ];
// let h1 = new TagDescript(titleH1, descriptionH1, atributesH1);


// let titleSpan = `<span>`;
// let descriptionSpan = `Тег <span> предназначен для определения строчных элементов документа. 
// В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. 
// Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. 
// Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
// let atributesSpan = [
//     {
//         atributeTitle: `lang`,
//         atributeSpecification: `Браузер использует значение параметра для правильного отображения некоторых национальных символов.`
//     },
//     {
//         atributeTitle: `style`,
//         atributeSpecification: `Применяется для определения стиля элемента с помощью правил CSS.`
//     },
//     {
//         atributeTitle: `dir`,
//         atributeSpecification: `Задает направление и отображение текста — слева направо или справа налево.`
//     }
// ];
// let span = new TagDescript(titleSpan, descriptionSpan, atributesSpan);


// let titleInput = `<input>`;
// let descriptionInput = `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. 
// Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. 
// Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, 
// где их обрабатывает серверная программа, то указывать <form> обязательно. 
// То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.
// Основной атрибут тега <input>, определяющий вид элемента — type. 
// Он позволяет задавать следующие элементы формы: 
// текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), 
// кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). 
// Для каждого элемента существует свой список атрибутов, которые определяют его вид и характеристики. 
// Кроме того, в HTML5 добавлено еще более десятка новых элементов.`;
// let atributesInput = [
//     {
//         atributeTitle: `alt`,
//         atributeSpecification: `Альтернативный текст для кнопки с изображением.`
//     },
//     {
//         atributeTitle: `list`,
//         atributeSpecification: `Указывает на список вариантов, которые можно выбирать при вводе текста.`
//     },
//     {
//         atributeTitle: `placeholder`,
//         atributeSpecification: `Выводит подсказывающий текст.`
//     }
// ];
// let input = new TagDescript(titleInput, descriptionInput, atributesInput);


// let titleForm = `<form>`;
// let descriptionForm = `Тег <form> устанавливает форму на веб-странице. 
// Форма предназначена для обмена данными между пользователем и сервером. 
// Область применения форм не ограничена отправкой данных на сервер, 
// с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.
// Документ может содержать любое количество форм, но одновременно на сервер может быть отправлена только одна форма. 
// По этой причине данные форм должны быть независимы друг от друга.
// Для отправки формы на сервер используется кнопка Submit, того же можно добиться, если нажать клавишу Enter в пределах формы. 
// Если кнопка Submit отсутствует в форме, клавиша Enter имитирует ее использование.
// Когда форма отправляется на сервер, управление данными передается программе, заданной атрибутом action тега <form>. 
// Предварительно браузер подготавливает информацию в виде пары «имя=значение», 
// где имя определяется атрибутом name тега <input>, а значение введено пользователем или установлено в поле формы по умолчанию.`;
// let atributesForm = [
//     {
//         atributeTitle: `accept-charset`,
//         atributeSpecification: `Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.`
//     },
//     {
//         atributeTitle: `autocomplete`,
//         atributeSpecification: `Включает автозаполнение полей формы.`
//     },
//     {
//         atributeTitle: `target`,
//         atributeSpecification: `Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.`
//     }
// ];
// let form = new TagDescript(titleForm, descriptionForm, atributesForm);


// let titleOption = `<option>`;
// let descriptionOption = `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. 
// Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. 
// Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. 
// Это также необходимо, когда к данным списка идет обращение через скрипты.`;
// let atributesOption = [
//     {
//         atributeTitle: `disabled`,
//         atributeSpecification: `Заблокировать для доступа элемент списка.`
//     },
//     {
//         atributeTitle: `label`,
//         atributeSpecification: `Указание метки пункта списка.`
//     },
//     {
//         atributeTitle: `selected`,
//         atributeSpecification: `Заранее устанавливает определенный пункт списка выделенным`
//     }
// ];
// let option = new TagDescript(titleOption, descriptionOption, atributesOption);


// let titleSelect = `<select>`;
// let descriptionSelect = `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. 
// Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. 
// Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. 
// Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. 
// Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. 
// Это также необходимо, когда к данным списка идет обращение через скрипты.`;
// let atributesSelect = [
//     {
//         atributeTitle: `multiple`,
//         atributeSpecification: `Позволяет одновременно выбирать сразу несколько элементов списка.`
//     },
//     {
//         atributeTitle: `required`,
//         atributeSpecification: `Список обязателен для выбора перед отправкой формы.`
//     },
//     {
//         atributeTitle: `tabindex`,
//         atributeSpecification: `Определяет последовательность перехода между элементами при нажатии на клавишу Tab`
//     }
// ];
// let select = new TagDescript(titleSelect, descriptionSelect, atributesSelect);

// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);

// // ==============================================
// // -  Створити класс  для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru
// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select//  
// // ==============================================
// class CreateTag {

//     constructor(tagName, tagDescription, attrArray,) {
//         this.tagName = tagName;
//         this.tagDescription = tagDescription;
//         this.attrArray = attrArray;
//     }

// }

// let aTag = new CreateTag(titleA, descriptionA, atributesA);
// let divTag = new CreateTag(titleDiv, descriptionDiv, atributesDiv);
// let h1Tag = new CreateTag(titleH1, descriptionH1, atributesH1);
// let spanTag = new CreateTag(titleSpan, descriptionSpan, atributesSpan);
// let inputTag = new CreateTag(titleInput, descriptionInput, atributesInput);
// let formTag = new CreateTag(titleForm, descriptionForm, atributesForm);
// let optionTag = new CreateTag(titleOption, descriptionOption, atributesOption);
// let selectTag = new CreateTag(titleSelect, descriptionSelect, atributesSelect);
// console.log(aTag);
// console.log(divTag);
// console.log(h1Tag);
// console.log(spanTag);
// console.log(inputTag);
// console.log(formTag);
// console.log(optionTag);
// console.log(selectTag);


// // ==============================================
// // - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// // CLASS

// // let car222 = {
// //     model: `GT Roadster`,
// //     producer: `Mercedes-AMG`,
// //     year: 2020,
// //     maxSpeed: 302,
// //     engineValue: 3.982
// // };
// class Car {
//     constructor(model, producer, year, maxSpeed, engineValue) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineValue = engineValue
//     }
// }
// let auto = new Car(`GT Roadster`, `Mercedes-AMG`, 2020, 302, 3.982);
// console.log(auto);

// let dr = {
//     name: `Mykola`,
//     age: 39,
//     status: `active`,
//     booked: false
// }
// class NewCar extends Car {
//     constructor(model, producer, year, maxSpeed, engineValue, driver = {}) {
//         super(model, producer, year, maxSpeed, engineValue);
//         this.driver = driver
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info() {
//         console.log(`модель: ${this.model}, виробник: ${this.producer}, рік випуску: ${this.year}, максимальна швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.engineValue}`)
//     };
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed
//     };
//     changeYear(newValue) {
//         this.year = newValue
//     };
//     addDriver(f) {
//         this.driver = f;
//     }
// }
// let auto2 = new NewCar(`GT Roadster`, `Mercedes-AMG`, 2020, 302, 3.982);
// console.log(auto);
// auto2.drive();
// auto2.info();
// auto2.increaseMaxSpeed(100);
// auto2.changeYear(2009);
// auto2.addDriver(dr);

// console.log(auto2)


// // ==============================================
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// let dr = {
//     name: `Mykola`,
//     age: 39,
//     status: `active`,
//     booked: false
// };

// function Car222(model, producer, year, maxSpeed, engineValue) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineValue = engineValue;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`модель: ${this.model}, виробник: ${this.producer}, рік випуску: ${this.year}, максимальна швидкість: ${this.maxSpeed} км/год, об'єм двигуна: ${this.engineValue} куб. см`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (dri) {
//         this.driver = dri
//     }
// };
// let someCar = new Car222(`GT Roadster`, `Mercedes-AMG`, 2020, 302, 3.982);
// console.log(someCar);
// someCar.drive();
// someCar.info();
// someCar.increaseMaxSpeed(50);
// console.log(someCar);
// someCar.changeYear(2010);
// console.log(someCar);
// someCar.addDriver(dr);
// console.log(someCar);


// // ==============================================
// // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================

// let dr = {
//         name: `Mykola`,
//         age: 39,
//         status: `active`,
//         booked: false
//     };    
// class Car55 {
//     constructor(model, producer, year, maxSpeed, engineValue) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineValue = engineValue
//     };
//     drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info = function () {
//         console.log(`модель: ${this.model}, виробник: ${this.producer}, рік випуску: ${this.year}, максимальна швидкість: ${this.maxSpeed} км/год, об'єм двигуна: ${this.engineValue} куб. см`)
//     };
//     increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     };
//     changeYear = function (newValue) {
//         this.year = newValue
//     };
//     addDriver = function (dri) {
//         this.driver = dri
//     }
// }

// let someCar = new Car55(`GT Roadster`, `Mercedes-AMG`, 2020, 302, 3.982);
// console.log(someCar);
// someCar.drive();
// someCar.info();
// someCar.increaseMaxSpeed(50);
// console.log(someCar);
// someCar.changeYear(2010);
// console.log(someCar);
// someCar.addDriver(dr);
// console.log(someCar);


// // ==============================================
// // -створити класс попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// // ==============================================

// let princesses = [];
// class Princess {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize
//     }
// }
// let princess1 = new Princess(`Snow White`, 16, 34);
// let princess2 = new Princess(`Cinderella`, 15, 32);
// let princess3 = new Princess(`Aurora`, 18, 36);
// let princess4 = new Princess(`Ariel`, 15, 33);
// let princess5 = new Princess(`Belle`, 18, 38);
// let princess6 = new Princess(`Jasmine`, 19, 37);
// let princess7 = new Princess(`Pocahontas`, 19, 39);
// let princess8 = new Princess(`Fa Mulan`, 20, 40);
// let princess9 = new Princess(`Tiana`, 16, 36);
// let princess10 = new Princess(`Rapunzel`, 20, 38);
// princesses.push(princess1, princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10);
// console.log(princesses);
// class Prince {
//     constructor(name, age, slipperSize) {
//         this.name = name;
//         this.age = age;
//         this.slipperSize = slipperSize
//     }
// }
// let prince =new Prince(`Ferdinand`, 24, 34)
// console.log(prince);

// for (const i of princesses) {
//    if (i.footSize === prince.slipperSize) {
//        console.log(i)         
//    } 
// }


// // ==============================================
// // -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// // ==============================================

// function Princess(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let princess1 = new Princess(`Snow White`, 16, 34);
// let princess2 = new Princess(`Cinderella`, 15, 32);
// let princess3 = new Princess(`Aurora`, 18, 36);
// let princess4 = new Princess(`Ariel`, 15, 33);
// let princess5 = new Princess(`Belle`, 18, 38);
// let princess6 = new Princess(`Jasmine`, 19, 37);
// let princess7 = new Princess(`Pocahontas`, 19, 39);
// let princess8 = new Princess(`Fa Mulan`, 20, 40);
// let princess9 = new Princess(`Tiana`, 16, 36);
// let princess10 = new Princess(`Rapunzel`, 20, 38);

// let princesses = [];
// princesses.push(princess1, princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10);
// console.log(princesses);

// function Prince(name, age, slipperSize) {
//     this.name = name;
//     this.age = age;
//     this.slipperSize = slipperSize;
//     this.findCinderella = function (array) {
//         for (const i of array) {
//             if (i.footSize === prince.slipperSize) {
//                 console.log(i)
//             }
//         }
//     }
// }
// let prince = new Prince(`Ferdinand`, 24, 34)
// console.log(prince);
// prince.findCinderella(princesses)
