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
function validate() {
    validateEmail();
    validatePassword();

    // Check if both email and password are valid
    if (err2.innerText.includes("valid") && err2.innerText.includes("strong")) {
        // Redirect to Success.html
        window.location.href = "success.html";
    }
}


