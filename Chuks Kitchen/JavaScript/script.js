const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* PASSWORD TOGGLE */

const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("passwordField");

if (togglePassword) {
    togglePassword.addEventListener("click", function () {
        const type = passwordField.getAttribute("type") === "password"
            ? "text"
            : "password";
        passwordField.setAttribute("type", type);
    });
}


/* SIGNUP PASSWORD TOGGLE */

const signupPasswordToggle = document.querySelector(".toggleSignupPassword");
const signupConfirmToggle = document.querySelector(".toggleSignupConfirm");

const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");

if (signupPasswordToggle) {
    signupPasswordToggle.addEventListener("click", function () {
        const type = signupPassword.type === "password" ? "text" : "password";
        signupPassword.type = type;
    });
}

if (signupConfirmToggle) {
    signupConfirmToggle.addEventListener("click", function () {
        const type = signupConfirmPassword.type === "password" ? "text" : "password";
        signupConfirmPassword.type = type;
    });
}

/* PASSWORD MATCH CHECK */

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        if (signupPassword.value !== signupConfirmPassword.value) {
            e.preventDefault();
            alert("Passwords do not match.");
        }
    });
}


/* LOADING AUTO REDIRECT */

// Wait for page to fully load
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";

        // Remove it completely after fade
        setTimeout(function () {
            loader.style.display = "none";
        }, 500);

    }, 1000); // Loader stays for 1 second

});