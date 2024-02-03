// Password validation
function validatePassword() {
    var password = pwd.value;
    var passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordRegexp.test(password)) {
        err2.innerText = "Password is strong";
        err2.style.color = "green";
    } else if (password.length >= 8) {
        err2.innerText = "Password is medium";
        err2.style.color = "orange";
    } else {
        err2.innerText = "Password is weak";
        err2.style.color = "red";
    }
}

// Combined validation function
// Combined validation function
function validate() {
    validateEmail();
    validatePassword();

    // Check if both email and password are valid
    var emailValid = err2.innerText.includes("Email is valid");
    var passwordStrong = err2.innerText.includes("Password is strong");

    if (emailValid && passwordStrong) {
        console.log("Validation successful, redirecting to Success.html");
        // Redirect to Success.html
        window.location.replace("success.html");
        // or window.location.href = "Success.html";
    }
}



