// Password validation
function validatePassword() {
    var passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegexp.test(pwd.value)) {
        err2.innerText += " | Password is strong";
        err2.style.color = "green";
    } else {
        err2.innerText += " | Password is weak";
        err2.style.color = "red";
    }
}

// Combined validation function
function validate() {
    validateEmail();
    validatePassword();
}
