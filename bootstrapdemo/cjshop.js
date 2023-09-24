

function validateYourEmail(email){
    var pattern =/^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][a-z]{2,4}$/;
    if (pattern.test(email)){
        return true; 
}
return false;
}

function validateYourFullname(fullname){
    var regFullname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (regFullname.test(fullname)){
        return true; 
}
return false;
}
function validate(){

// EMAIL VALIDATION   
var email = document.getElementById("email");
var fullname = document.getElementById("fullname");


if(validateYourEmail(email.value)){
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    document.getElementById("email-validation").innerText = "";
}
else if (email.value){
    email.classList.add("is-invalid");
    document.getElementById("email-validation").innerText = "Invalid Email";
}
else{
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    document.getElementById("email-validation").innerText = "Please Enter Email";
}

// FULL NAME VALIDATION


if(validateYourFullname(fullname.value)){
    fullname.classList.remove("is-invalid");
    fullname.classList.add("is-valid");
    document.getElementById("fullname-validation").innerText = "";
}
else if (fullname.value){
    email.classList.add("is-invalid");
    document.getElementById("fullname-validation").innerText = "Please enter again your Fullname";
}
else{
    fullname.classList.remove("is-valid");
    fullname.classList.add("is-invalid");
    document.getElementById("fullname-validation").innerText = "Please Enter your Fullname";
}
// PASSWORD VALIDATION

// CONFIRM PASSWORD VALIDATION
}
