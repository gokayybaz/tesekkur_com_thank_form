let backStep2Button = document.getElementById("btn-back-step-2");
let userInfoButton = document.getElementById("btn-user-info");
let nextCompleteStepButton = document.getElementById(
  "btn-form-next-complete-step"
);
let thankMessageInput = document.getElementById("inp-thank-message");

userInfoButton.innerText = localStorage.getItem("userFullName");
userInfoButton.style.backgroundColor = "#fe4a55";

backStep2Button.addEventListener("click", () => {
  window.location.href = "./video-thank-form-step-2.html";
});

nextCompleteStepButton.addEventListener("click", () => {
  window.location.href = "./video-thank-form-complete-step.html";
});
