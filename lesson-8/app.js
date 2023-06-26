//  array metods 
 
// variables 
 
// var let const 
 
// camelCase 
let myNameIs = ""; 
// snake style 
let my_name_is = ""; 
my_name_is = 45; 
 
//  for loop 
let nums = [22, 33, 44, 323, 232, 4343, 323, 3434, 3232, 434]; 
let res = 0; 
for (const n of nums) { 
  // 0 + 22 = 22 
  // 22 + 33 = 55 
  //55 + 44 = 99 
  // 99 + 323 = 422 
  res += n; 
} 
 
//   ctrl + shift + L 
//   ctrl + Alt + F 
//   win + V 
 
console.log(res); // JOOP 
 
const user1 = createUser("Jhon", 24); 
console.log("user1: ", user1); 
const user2 = createUser("Nazima", 18); 
console.log("user2: ", user2); 
function createUser(name, age) { 
  return { 
    name: name, 
    age: age, 
  }; 
} 
 
//  DOM 
const users = [user1, user2]; 
const root = document.getElementById("root"); 
 
users.forEach((user, index) => { 
  root.innerHTML += ` 
    <div>${index + 1}. ${user.name} ${user.age}<div> 
    `; 
}); 

const inputName = document.getElementById('enterName'); 
const inputAge = document.getElementById('enterAge'); 
const btn = document.getElementById('addUser'); 
// btn.addEventListener('click', () => { 
//     const name = inputName.value 
//     const age = inputAge.value 
//     }) 

btn.onclick = () => { 
  const name = inputName.value; 
  const age = inputAge.value; 
  if(!inputName.value.length && !inputAge.value.lenght){
    return
  }else {
    users.push(createUser(name, age)); 

  root.innerHTML= ""
  users.forEach((user, index) => { 
    root.innerHTML += ` 
        <div>${index + 1}. ${user.name} ${user.age}<div> 
        `; 
  }); 
  inputName.value = ''
  inputAge.value =''
  }
  
  };
