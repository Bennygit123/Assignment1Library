document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupform");

    form.addEventListener("submit", function(event) {
        // Prevent form submission to check validation first
        event.preventDefault();

        // Validate the phone number
        const phoneNumberInput = document.getElementById("phoneNumber");
        const phoneNumberValue = phoneNumberInput.value;

        if (!validatePhoneNumber(phoneNumberValue)) {
            alert("Invalid phone number. Please enter a valid 10-digit number or use one of the specified formats.");
            phoneNumberInput.focus();
            return;
        }

        // If validation is successful, you can proceed with form submission or other actions
        alert("Form submitted successfully!");
        // Uncomment the line below to submit the form programmatically
        // form.submit();
    });

    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^(?:(?:\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4})$/;
        return phoneRegex.test(phoneNumber);
    }
});
