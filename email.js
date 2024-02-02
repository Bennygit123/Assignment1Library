var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var err2 = document.getElementById("err2");

function validate(){
    var regexp= /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/
    if(regexp.test(email.value)){
        err2.innerText = "Email is valid";
        return true
    }
      else{
        err2.innerText="Email is invalid"
        return false
      }
}