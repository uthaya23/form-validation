const nameInput=document.querySelector("#name")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const errorNodes=document.querySelectorAll(".error")

function validateform(){
    console.log(nameInput);
    console.log(email);
    console.log(password);
    clearMessages();
    let errorFlage=false
    if(nameInput.value.length<3){
        errorNodes[0].innerText="Enter proper name"
        errorFlage=true
        nameInput.classList.add('error')
    }
    if(!emailcheck(email.value)){
        errorNodes[1].innerText="Invalid email"
        errorFlage=true
        email.classList.add('error')
    }
    if(phonenumber.value.length!=10){
        errorNodes[2].innerText="Phone number must have 10 digit number"
        errorFlage=true
        phonenumber.classList.add('error')
    }

    if(!passwordcheck(password.value)){
        errorNodes[3].innerText="Password must have at least 6 characters and contain at least one of the following:uppercase,lowercase,numbers and symbols"
        errorFlage=true
        password.classList.add('error')
    }
    if(!errorFlage){
        openPopup();
        //success.innerHTML="Your registration has been successful."
        nameInput.classList.remove('error')
        email.classList.remove('error')
        phonenumber.classList.remove('error')
        password.classList.remove('error')
    }

    
}
function clearMessages(){
   for(let i=0; i<errorNodes.length;i++){
    errorNodes[i].innerText=""
    nameInput.classList.remove('error')
    email.classList.remove('error')
    phonenumber.classList.remove('error')
    password.classList.remove('error')
   }
   
   
}

function emailcheck(email){
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email)
}
function passwordcheck(password){
    let pattern=/^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,})+$/;
    return pattern.test(password)
}

//popup
let popup=document.getElementById("popup")
function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    nameInput.value=""
    email.value=""
    phonenumber.value=""
    password.value=""
    popup.classList.remove("open-popup")

}