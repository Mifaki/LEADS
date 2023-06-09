const togglePassword = document.getElementById("toggle-password");
const togglePasswordConfirmation = document.getElementById(
  "toggle-password-confirmation"
);
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);

togglePassword.addEventListener("click", () => {
  const passwordType = passwordInput.getAttribute("type");
  passwordInput.setAttribute(
    "type",
    passwordType === "password" ? "text" : "password"
  );
  togglePassword.src = togglePassword.src.includes("eye-solid.svg")
    ? "Assets/eye-slash-solid.svg"
    : "Assets/eye-solid.svg";
});

togglePasswordConfirmation.addEventListener("click", () => {
  const passwordConfirmationType =
    passwordConfirmationInput.getAttribute("type");
  passwordConfirmationInput.setAttribute(
    "type",
    passwordConfirmationType === "password" ? "text" : "password"
  );
  togglePasswordConfirmation.src = togglePasswordConfirmation.src.includes(
    "eye-solid.svg"
  )
    ? "Assets/eye-slash-solid.svg"
    : "Assets/eye-solid.svg";
});
