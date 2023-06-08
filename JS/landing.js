function checkPassword() {
  var password = localStorage.getItem("password");
  if (password !== null && password !== undefined) {
    window.location.href = "home.html";
  } else {
    window.location.href = "login.html";
  }
}
