let array = [
    {
        id: 1,       
        model: `C_Two`,
        producer: `Rimac`,
        timeTo100Kmh: 1.97,
        horsePover: 1941,
        image: `https://media.fastestlaps.com/rimac-c-two.jpg`
    },
    {
        id: 2,       
        model: `Divo`,
        producer: `Bugatti`,
        timeTo100Kmh: 2.4,
        horsePover: 1500,
        image: `https://topgearrussia.ru/data/topgear/preview/2018-08/27/image-b7ee8bb71535357997-1100x619.jpg`
    },
    {
        id: 3,       
        model: `TSR-S`,
        producer: `Zenvo`,
        timeTo100Kmh: 2.8,
        horsePover: 1194,
        image: `https://www.carscoops.com/wp-content/uploads/2020/04/zenvo-tsr-s-0.jpg`
    },    
    {
        id: 4,       
        model: `Speedtail`,
        producer: `McLaren`,
        timeTo100Kmh: 2.7,
        horsePover: 11050,
        image: `https://bucket.carmodel.com/images/cm-lg/137451-1.jpg`
    },
    {
        id: 5,       
        model: `Monza`,
        producer: `Ferrari`,
        timeTo100Kmh: 2.9,
        horsePover: 800,
        image: `https://wroom.ru/i/cars2/ferrari_monza_1.jpg`
    },
    {
        id: 6,       
        model: `Aventador SVJ`,
        producer: `Lamborghini`,
        timeTo100Kmh: 2.9,
        horsePover: 770,
        image: `https://media.fastestlaps.com/lamborghini-aventador-svj.jpg`
    },    
    {
        id: 7,       
        model: `Corvette ZR1`,
        producer: `Chevrolet`,
        timeTo100Kmh: 3.6,
        horsePover: 765,
        image: `https://media.fastestlaps.com/chevrolet-corvette-zr1-25.jpg`
    },
    {
        id: 8,       
        model: `DBS Superleggera`,
        producer: `Aston Martin`,
        timeTo100Kmh: 3.7,
        horsePover: 735,
        image: `https://media.fastestlaps.com/aston-martin-dbs-superleggera.jpg`
    },
    {
        id: 9,       
        model: `GT-R 50 Italdesign`,
        producer: `Nissan`,
        timeTo100Kmh: 2.6,
        horsePover: 772,
        image: `https://images.drive.ru/i/0/5b434b48ec05c4c30e000024.jpg`
    },    
    {
        id: 10,       
        model: `919 evo`,
        producer: `Porsche`,
        timeTo100Kmh: 2.2,
        horsePover: 1370,
        image: `http://nahybride.ru/wp-content/uploads/2018/11/porsche_919_hybrid_547_019c00000ad30830-min.jpg`
    },
    {
        id:11,       
        model: `488 Pista`,
        producer: `Ferrari`,
        timeTo100Kmh: 2.8,
        horsePover: 720,
        image: `https://media.fastestlaps.com/ferrari-488-pista.jpg`
    },
    {
        id: 12,       
        model: `M5 Competition`,
        producer: `BMW`,
        timeTo100Kmh: 3.1,
        horsePover: 625,
        image: `https://media.fastestlaps.com/bmw-m5-f90-competition.jpg`
    },    
    {
        id: 13,       
        model: `Challenger Hellcat Redeye`,
        producer: `Dodge`,
        timeTo100Kmh: 3.5,
        horsePover: 727,
        image: `https://www.seoworm.ru/super/cars/dodge_challenger_hellcat_redeye-923/photo.jpg`
    },
    {
        id: 14,       
        model: `GT 4dr`,
        producer: `Mercedes-AMG`,
        timeTo100Kmh: 3.4,
        horsePover: 640,
        image: `https://cdn.motor1.com/images/mgl/lAMWN/s3/2019-mercedes-amg-gt63s-4-door.jpg`
    },
    {
        id: 15,       
        model: `600LT`,
        producer: `McLaren`,
        timeTo100Kmh: 3.1,
        horsePover: 600,
        image: `https://media.fastestlaps.com/mclaren-600lt-spider.jpg`
    }
]
let rootDiv = document.getElementById('root')
for (let i = 0; i<array.length;i++){
    let div = document.createElement("div");
    div.className='array_item'
    div.innerHTML=` 
    <h2>${array[i].id}</h2>
    <h3>${array[i].model}</h3>
    <h3>${array[i].producer}</h3>
    <h4 class="100_km">${array[i].timeTo100Kmh}</h4>
    <h4 class="horse_power">${array[i].horsePover}</h4>
    <img src="${array[i].image}" alt="${array[i].model}">`    
    rootDiv.appendChild(div)
}
