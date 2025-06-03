document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let isValid = true;
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    successMessage.innerText = "";

    if (name === "") {
        nameError.innerText = "Name cannot be empty.";
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.innerText = "Enter a valid email.";
        isValid = false;
    }

    if (message === "") {
        messageError.innerText = "Message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerText = "Form submitted successfully!";
    }
});
