
var pwd = document.getElementById("pwd");
var err2 = document.getElementById("err2");
// Password validation
function validatePassword() {
    var password = pwd.value;
    var passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordRegexp.test(password)) {
        err2.innerText = "Password is strong";
        err2.style.color = "green";
        return true;
    } else if (password.length >= 8) {
        err2.innerText = "Password is medium";
        err2.style.color = "orange";
    } else {
        err2.innerText = "Password is weak";
        err2.style.color = "red";
    }

    return false;
}

// Combined validation function
function validate() {
    var emailValid = validateEmail();
    var passwordStrong = validatePassword();

    // Check if both email and password are valid
    if (emailValid && passwordStrong) {
        console.log("Validation successful, redirecting to success.html");
        // Redirect to success.html
        window.location.replace("success.html");
        // or window.location.href = "success.html";
    }
}
