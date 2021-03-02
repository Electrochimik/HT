// console.log(`start`);

// let clock = document.getElementById('clock');
// setInterval(()=>{
//     let date = new Date();
//    clock.innerText = date.getHours() +" "+ date.getMinutes() +" "+ date.getSeconds();
// }
// ,1000);

// console.log(`stop`);
// setTimeout(()=>console.log(`yeahh`), 2000)

let usersBlock = document.getElementById(`clock`)
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let item = document.createElement(`p`);
//             item.innerText = `${user.id} ${user.name} ${user.address.city}`;
//             usersBlock.appendChild(item)
//         }
//     }
//     )

let cartoons =[];
const baseURL = 'https://api.sampleapis.com/cartoons/cartoons2D';
fetch(baseURL)
  .then(resp => resp.json())
  .then(list => {
      cartoons = list;
        // console.log(list);
        // for (const item of list) {
        //     let listItem = document.createElement('div');
        //     let number = document.createElement('h2');
        //     let name = document.createElement('h3');
        //     let image = document.createElement('img');
        //     number.innerText = `${item.id}`;
        //     name.innerText = `${item.title}`;
        //     image.src = item.image;
        //     number.innerText = `${item.id}`;
        //     listItem.appendChild(number);
        //     listItem.appendChild(name);
        //     listItem.appendChild(image);
        //     usersBlock.appendChild(listItem)
        // }
    }
    )
    setTimeout(() =>console.log(cartoons),5000)

