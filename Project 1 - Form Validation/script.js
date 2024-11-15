const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const submitbtn = document.getElementById("btn");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validateInputs();
} );

const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === ""){
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    if(passwordValue === ''){
        setError2(password, "Password is requied.");
    } else if(passwordValue.length <8){
        setError2(password, "Password is too short. (Minimum 8 Characters)");
    } else {
        setSuccess2(password);
    }

    if(cpasswordValue === ""){
        setError2(cpassword, "Confirming password is necessary.");
    } else if(cpasswordValue !== passwordValue){
        setError2(cpassword, "Password Does Not Match.");
    } else {
        setSuccess2(cpassword);
    }

    if(emailValue === ""){
        setError(email, "Email is required.");
    } else if(!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address.")
    } else {
        setSuccess(email);
    }
}

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector(".error");
    errordisplay.innerText = message;

    inputControl.classList.add('err');
    inputControl.classList.remove('success');
}

const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector(".error");
    errordisplay.innerText = "";

    
    inputControl.classList.add('success');
    inputControl.classList.remove('err');
}

const setError2 = (element, message)=>{
    const inputControl = element.parentElement;
    const realparent = inputControl.parentElement;
    const errordisplay = realparent.querySelector(".error");
    errordisplay.innerText = message;

    realparent.classList.add('err');
    realparent.classList.remove('success');
}

const setSuccess2 = (element)=>{
    const inputControl = element.parentElement;
    const realparent = inputControl.parentElement;
    const errordisplay = realparent.querySelector(".error");
    errordisplay.innerText = "";

    
    realparent.classList.add('success');
    realparent.classList.remove('err');
}

function isValidEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

// ri-eye-close-line

const showpass = document.querySelector(".sp1");
const showcpass = document.querySelector(".sp2");
var i = 0;

showpass.addEventListener('click', (e)=>{
    if(i=== 0){
        showpass.className="sp1 ri-eye-close-line";
        
        const parent = showpass.parentElement;
        const inpass = parent.querySelector("input");
        inpass.type = "text";

        i = 1;
    } else if( i === 1){
        showpass.className="sp1 ri-eye-line";
        
        const parent = showpass.parentElement;
        const inpass = parent.querySelector("input");
        inpass.type = "password";

        i=0;
    }
})

showcpass.addEventListener('click', (e)=>{
    if(i=== 0){
        showcpass.className="sp2 ri-eye-close-line";
        
        const parent = showcpass.parentElement;
        const inpass = parent.querySelector("input");
        inpass.type = "text";

        i = 1;
    } else if( i === 1){
        showcpass.className="sp2 ri-eye-line";
        const parent = showcpass.parentElement;
        const inpass = parent.querySelector("input");
        inpass.type = "password";
        i=0;
    }
})