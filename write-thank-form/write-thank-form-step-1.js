let backMainContainerButton = document.getElementById(
  "btn-back-main-container"
);

let nameLastNameInput = document.getElementById("inp-name-lastname");
let eMailInput = document.getElementById("inp-email");

let nextStage2FormButton = document.getElementById("btn-form-next-stage-2");
let userInfoButton = document.getElementById("btn-user-info");

nextStage2FormButton.addEventListener("click", () => {
  if (nameLastNameInput.value == "" || eMailInput.value == "") {
    alert("Lütfen tüm alanları doldurunuz.");
  } else {
    localStorage.setItem("userFullName", nameLastNameInput.value);
    window.location.href = "/write-thank-form/write-thank-form-step-2.html";
  }
});

backMainContainerButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});
