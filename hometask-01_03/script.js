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
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let item = document.createElement(`p`);
            item.innerText = `${user.id} ${user.name} ${user.address.city}`;
            usersBlock.appendChild(item)
        }
    }
    )
