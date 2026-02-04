const form = document.getElementById("registration-form");

const usernameInput = document.querySelector(".username-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const confirmPasswordInput = document.querySelector(".confirm-password-input");

const usernameErrorSpan = document.querySelector(".username-error");
const emailErrorSpan = document.querySelector(".email-error");
const passwordErrorSpan = document.querySelector(".password-error");
const confirmPasswordErrorSpan = document.querySelector(".confirm-password-error");

let usernameIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;
let confirmPasswordIsValid = false;

const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();


    if (usernameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid) {
        alert("Registration Successful");
        reset();

    } else {
        alert("All Fields are Required");
    }
});

usernameInput.addEventListener("input", checkUsername);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkConfirmPassword);

function checkUsername() {
    const username = usernameInput.value;

    if (username === "") {
        usernameErrorSpan.innerText = "Username is Required";
        usernameInput.style.border = "1px solid #DA5345";

        usernameIsValid = false;

        return;
    } else if (!usernameRegex.test(username)) {
        usernameErrorSpan.innerText =
            "Username can only contain letters, numbers, and underscores.";

        usernameInput.style.border = "1px solid #DA5345";

        usernameIsValid = false;

        return;
    } else if (username.length < 6 || username.length > 20) {
        usernameErrorSpan.innerText =
            "Username must be between 6 and 20 characters long.";

        usernameInput.style.border = "1px solid #DA5345";

        usernameIsValid = false;

        return;
    } else {
        usernameInput.style.border = "1px solid #45da77";
        usernameErrorSpan.innerText = "";
        usernameIsValid = true;

        return;
    }
}

function checkEmail() {
    const email = emailInput.value;

    if (email === "") {
        emailErrorSpan.innerText = "Email is Required";
        emailInput.style.border = "1px solid #DA5345";

        emailIsValid = false;

        return;
    } else if (!emailRegex.test(email)) {
        emailErrorSpan.innerText = "Please enter a valid email address.";
        emailInput.style.border = "1px solid #DA5345";

        emailIsValid = false;

        return;
    } else {
        emailInput.style.border = "1px solid #45da77";
        emailErrorSpan.innerText = "";
        emailIsValid = true;

        return;
    }
}

function checkPassword() {
    const password = passwordInput.value;

    if (password === "") {
        passwordErrorSpan.innerText = "Password is Required";
        passwordInput.style.border = "1px solid #DA5345";
        passwordIsValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordErrorSpan.innerText =
            "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
        passwordInput.style.border = "1px solid #DA5345";
        passwordIsValid = false;
    } else {
        passwordInput.style.border = "1px solid #45da77";
        passwordErrorSpan.innerText = "";
        passwordIsValid = true;
    }
}

function checkConfirmPassword() {
    const confirmedPassword = confirmPasswordInput.value;
    const password = passwordInput.value;

    if (confirmedPassword === "") {
        confirmPasswordErrorSpan.innerText = "Please confirm your password.";
        confirmPasswordInput.style.border = "1px solid #DA5345";

        confirmPasswordIsValid = false;

        return;
    } else if (password !== confirmedPassword) {
        confirmPasswordErrorSpan.innerText = "Passwords do not match.";
        confirmPasswordInput.style.border = "1px solid #DA5345";

        confirmPasswordIsValid = false;

        return;
    } else {
        confirmPasswordInput.style.border = "1px solid #45da77";
        confirmPasswordErrorSpan.innerText = "";

        confirmPasswordIsValid = true;
    }
}

function reset() {
    usernameErrorSpan.innerText = "";
    usernameInput.value = "";
    usernameInput.style.border = "none";
    usernameIsValid = false;

    emailInput.value = "";
    emailErrorSpan.innerText = "";
    emailInput.style.border = "none";
    emailIsValid = false;

    passwordErrorSpan.innerText = "";
    passwordInput.value = "";
    passwordInput.style.border = "none";
    passwordIsValid = false;

    confirmPasswordErrorSpan.innerText = "";
    confirmPasswordInput.value = "";
    confirmPasswordInput.style.border = "none";
    confirmPasswordIsValid = false;
}