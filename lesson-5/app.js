//  functions
// let cons (var)

// const number = '+996 500 255 225'
// let  Kanat = checkNumber(number,"+996 500 255 225")


// const number2 ="+996 222 222 555"
// let Kanat2 = checkNumber(number2,"+996 222 222 555")


// console.log(Kanat);
// console.log(Kanat2);

// function checkNumber (num,phone){
//     if(num === phone) {
//     return true
//     }
    
// }

// DOM Document Object Modal
// Find Element (h1-h6,p,div)
// getElementsByTagName() div button img ul
//  getElementsByClassName() text --center class

// New
// querySelectorAll() div text-center
// querySelectorAll() div button img
// const h1Tag =document.querySelectorAll('h1')

// for(let i = 0; i< h1Tag.length; i ++){
//     h1Tag[i].innerText = h1Tag[i].innerText + " world"
//     h1Tag[i].style.color = 'red'
//     h1Tag[i].style.fontSize = '56px'
//     h1Tag[i].style.background = 'black'
//     h1Tag[i].style.textAlign = 'center'
// }


const cars = [{
    model:"Audi",
    price: 2220,
    color: 'black',
    img:"https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-performance-automobile/i7-m70-xdrive/bmw-i7-m70-stage-teaser.png.asset.1681387862051.png"
  },
                {
    model:"BMW",
    price: 4220,
    color: 'blue',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8D3agex0gBt3OI8YwXctyYEfBH7GfFqgBg57uuaRpMh16vt-hxHaYU0k9b6tgXY1l-k&usqp=CAU"
  },
               
               ]

const div  = document.querySelector('#list')
 
 
for( const car of cars ){ 
    div.innerHTML += ` 
    <div class="card"> 
        <div> 
            <img src=${car.img} width="200"  /> 
        </div> 
        <div> 
            <h1>${car.model}</h1> 
            <h1>${car.price} $ </h1> 
            <h1>${car.color} $ </h1> 
        </div> 
    <div>` 
}
    

