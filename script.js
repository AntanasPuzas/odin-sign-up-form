const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordSpan = document.querySelector("#password-span");

password.addEventListener("keyup", () => {
    validatePassoword();
});

confirmPassword.addEventListener("keyup", () => {
    validatePassoword();
});

function validatePassoword() {
    if (password !== null && confirmPassword !== null) {
        if (password.value !== confirmPassword.value) {
            password.classList.add("error");
            confirmPassword.classList.add("error");
            passwordSpan.classList.add("passwords-dont-match");
            passwordSpan.textContent = "* Passwords don't match";
        } else {
            password.classList.remove("error");
            confirmPassword.classList.remove("error");
            passwordSpan.classList.remove("passwords-dont-match");
            passwordSpan.textContent = "";
        }
    }
}