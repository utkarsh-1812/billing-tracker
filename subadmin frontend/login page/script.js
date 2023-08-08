const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Perform login logic
    // For demo purposes, let's assume successful login
    redirectToHomePage();
});

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Perform signup logic
    // For demo purposes, let's assume successful signup
    redirectToHomePage();
});

function redirectToHomePage() {
    // Redirect to the homepage
    window.location.href = "homepage.html"; // Replace with the actual homepage URL
}
