document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const passwordConfirmation = document.getElementById("passwordConfirmation");

    if (password !== passwordConfirmation.value) {
      passwordConfirmation.setCustomValidity(
        "Password and confirmation do not match"
      );
      event.preventDefault();
      return;
    }

    passwordConfirmation.setCustomValidity("");

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    event.preventDefault();
    window.location.href = "../Login/login.html";
  });
