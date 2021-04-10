
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit-button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "pwd") {
        alert("You have logged in");
        location.href="http://127.0.0.1:5500/index.html";
    } else {
        alert("Incorrect Username/Password please try again.")
    }
})