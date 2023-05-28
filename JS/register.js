document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const passwordConfirmationInput = document.getElementById(
      "passwordConfirmation"
    );

    if (passwordInput.value !== passwordConfirmationInput.value) {
      passwordConfirmationInput.setCustomValidity(
        "Password and confirmation do not match"
      );
      event.preventDefault();
    } else {
      passwordConfirmationInput.setCustomValidity("");
      localStorage.setItem("username", usernameInput.value);
      localStorage.setItem("password", passwordInput.value);
      event.preventDefault();
      window.location.href = "../Login/login.html";
    }
  });
