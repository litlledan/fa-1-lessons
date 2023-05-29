// Don

const form = document .getElementById("form")

const userData = {
    name: "User",
    email:"test@gmail.com",
    nikName:"Venom_",
    password:"23456"
}
// ctrl + alt + F 
form.onsubmit = (e) => { 
    e.preventDefault()
    console.log(e.target, '-----?------')
    const formData = e. target
    const formEmail = formData.email.value
    // console.log("formEmail: ", formEmail);
    const formPassword = formData.password.value
    // console.log("formPassword: ", formPassword);

if(userData.email === formEmail && userData.password === formPassword){
    alert("Welcome " + userData.name)
    window.location.href = "https://www.google.com/"
}else {
    alert(' Error email or password')
}

}

// DOM ELEMENTY
const btnMinus = document .getElementById('minus')
const btnPlus = document .getElementById('plus')
const pText = document .getElementById('text-count')

// onclick
btnPlus.onclick = () => {
    pText.innerText = parseInt( pText.innerText) + 1
    const tprice = parseInt( pText.innerText)
    price.innerText = 500 * parseInt( pText.innerText) + "$"
}

btnMinus.onclick = () => {
    if(pText.innerText > 0 ){
        pText.innerText = parseInt( pText.innerText) - 1
        price.innerText = 500 * parseInt( pText.innerText) + "$"
    
    }
}



