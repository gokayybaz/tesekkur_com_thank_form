let backStep2Button = document.getElementById("btn-back-step-2");
let userInfoButton = document.getElementById("btn-user-info");
let nextCompleteStepButton = document.getElementById(
  "btn-form-next-complete-step"
);
let thankMessageInput = document.getElementById("inp-thank-message");

userInfoButton.innerText = localStorage.getItem("userFullName");
userInfoButton.style.backgroundColor = "#fe4a55";

backStep2Button.addEventListener("click", () => {
  window.location.href = "./write-thank-form-step-2.html";
});

nextCompleteStepButton.addEventListener("click", () => {
  if (thankMessageInput.value == "") {
    alert("Lütfen teşekkür mesajı giriniz!");
  } else {
    window.location.href = "./write-thank-form-complete-step.html";
  }
});
