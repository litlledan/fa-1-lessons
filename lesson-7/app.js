// map,filter,reduce,sort,find,slice,forEach,split,join,push,
// -pop,-unshrift.-shrift,includes,-concat

let menu = ['Home', 'About', 'Profile']

// fuction (alert, promt,confirm,)
// metod ( .map(), .filter())

function callbackFn(value, index, array) {
    const li = document.createElement('li')
    li.innerText = index + 1 + "-" + value
    document.body.appendChild(li)
    li.style.listStyle = 'none'
    return li

}


let menuli = menu.map(callbackFn)

function cbFn(value, index, array) {
    return value.length < 5
}

let shortMenu = menu.filter(cbFn)
console.log("shortMenu:", shortMenu);

let users = ['Nazima', 'Zarina', 'Jakyp']

let nazima = users.filter((value) => {
    return value === 'Nazima'
})

console.log(nazima);

const price = [300, 400, 500, 800]
const letter = ['b', 'd', 'c', 'a']
const word = letter.sort()

console.log(word)
const sortedPrice = price.sort((a, b) => b - a)

console.log(sortedPrice);

const cars = ['BMW', 'Mercedes', 'Mazda']

const bmw = cars.find((el) => el === "BMW")
console.log(bmw)

const laptops = [
    {
        name: 'Asus',
        year: '2020',
        ssd: '512',
        price: '800'
    },
    {
        name: 'Asus TUF',
        year: '2021',
        ssd: '600',
        price: '1000'
    },
    {
        name: 'Aker Predator',
        year: '2022',
        ssd: '1000',
        price: '1300'
    },
]

const renderLaptops = (arr, index) => {
    const ol = document.createElement("ol")
    const li = document.createElement("li")
    li.innerHTML = `   
     <p>${arr[index].name}</p>
     <p>${arr[0].year}</p>
     <p>${arr[0].ssd}Gb</p>
     <p>${arr[0].price}</p>
    `
    ol.appendChild(li)
    document.body.append(ol)

}
const select = document.getElementById('variant')
select.onchange = (e) => {
    console.log(e.target.value);
    switch (key) {
        case "Aser":
        break;
        default:
    
    }
}
