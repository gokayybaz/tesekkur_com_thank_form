let userInfoButton = document.getElementById("btn-user-info");
let goToHomeScreenButton = document.getElementById("btn-go-to-homescreen");

userInfoButton.innerText = localStorage.getItem("userFullName");
userInfoButton.style.backgroundColor = "#fe4a55";

goToHomeScreenButton.addEventListener("click", () => {
  localStorage.setItem("userFullName", "");
  window.location.href = "../index.html";
});
