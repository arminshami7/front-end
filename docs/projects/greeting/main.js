import {greet} from "./welcome.js";
const nameInput = document.getElementById ("nameInput");
const welcomeBtn =document.getElementById("welcomeBtn");
const message = document.getElementById ("message");

welcomeBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if(name){
        message.textContent = greet(name);
    } else{
        message.textContent = "لطفاً نام خود را وارد کنید.";
    }
});