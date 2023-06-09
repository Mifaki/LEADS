document.getElementById("user-name").innerHTML = localStorage.getItem("username").split(" ")[0] ?? "Budi";

const regisButton = document.querySelector(".regis-button");

regisButton.addEventListener("click", function() {
  window.open("https://find-it.id/", "_blank");
});