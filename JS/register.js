document.getElementById("registration-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const passwordConfirmation = document.getElementById("passwordConfirmation");

  console.log("Im here");

  if (password !== passwordConfirmation.value) {
    alert("Password and confirmation do not match");
    return;
  }

  passwordConfirmation.setCustomValidity("");

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  event.preventDefault();
  window.location.href = "login.html";
});
