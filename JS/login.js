document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const identifier = document.getElementById("identifier").value;
  const password = document.getElementById("password").value;

  const storedUsername = localStorage.getItem("username");
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (
    !(identifier.trim() === storedUsername || identifier.trim() === storedEmail) ||
    password.trim() !== storedPassword
  ) {
    alert("Invalid username/email or password. Please try again.");
    return;
  }

  document.getElementById("identifier").value = "";
  document.getElementById("password").value = "";
  window.location.href = "../../Home/home.html";
});
