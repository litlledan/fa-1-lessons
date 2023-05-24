// For Loop

// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');

for (let i = 0; i < 50; i++) {
    // console.log('Hello', i);
}

const names = ['Nazik', 'Aliya', 'Manisa']
//  index         0       1         2
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[3]);


for (let i = 0; i < names.length; i++) {
    // console.log('Hello',names {i});
    //     % 5  кола
    //     % 3 кола 
}
for (let san = 1; san < 101; san++) {
    if (san % 3 === 0 && san % 5 === 0) {
        console.log("KOLA", san);
    }
}

let name = 'Adahan'

for (let tamga = 0; tamga < name.length; tamga++) {
    if (name[tamga].toLowerCase() === 'a') {
        console.log(name[tamga]);
    }
}


for (const t of name) {
    if (t.toUpperCase() === 'A') {
        console.log(t.toUpperCase());
    }
}

const user = {
    name:'Adahan',
    age:25,
    gender:'male'
}

console.log(user.name )

for ( const key in user ){
  console.log(user[key]);
}

let btn1 = document.querySelectorAll('button')
for(let i = 0; i < btn1.length; i++) {
    btn1[i].onclick = function () {
        document.body.style.background = btn1[i].innerText
    }
}

btn1.onclick = function (){
    document.body.style.background = btn1.innerText
}