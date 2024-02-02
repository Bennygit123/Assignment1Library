var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var err1=document.getElementById("err1");

function validate(){
    console.log(email.value);
    if(email.value.trim() == "" || pwd.value.trim() == "") {
        alert("Field is empty");
        return false;
    } else if(pwd.value.length < 5){
        //alert("Password is too short");
        pwd.style.border = "2px solid red";
        err1.innerText = "password is too short";
        return false;
    } else {
        alert("Validation is proper");
        return true;

    }
}