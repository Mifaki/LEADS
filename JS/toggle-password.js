const togglePassword = document.getElementById("toggle-password");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.src = togglePassword.src.includes("eye-solid.svg")
        ? "../../../Assets/eye-slash-solid.svg"
        : "../../../Assets/eye-solid.svg";
});
