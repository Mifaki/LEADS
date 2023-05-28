document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredUsernameOrEmail = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;
  const storedUsernameOrEmail = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (
    enteredUsernameOrEmail === storedUsernameOrEmail &&
    enteredPassword === storedPassword
  ) {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    window.location.href = "../Home/home.html";
  } else {
    alert("Invalid username/email or password. Please try again.");
  }
});
