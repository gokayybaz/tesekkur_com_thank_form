let companyInput = document.getElementById("inp-company");
let subjectInput = document.getElementById("inp-subject");

let nextStage3FormButton = document.getElementById("btn-form-next-stage-3");
let backStep1Button = document.getElementById("btn-back-step-1");
let userInfoButton = document.getElementById("btn-user-info");

let inputCompanyListItem = document.getElementById("inp-company-list-item");
let inputCompanyListArea = document.getElementById("inp-company-list");
let inputCompanyListItemTitle = document.getElementById(
  "inp-company-list-item-title"
);

userInfoButton.innerText = localStorage.getItem("userFullName");
userInfoButton.style.backgroundColor = "#fe4a55";

companyInput.addEventListener("click", () => {
  inputCompanyListArea.style.display = "flex";
  inputCompanyListItem.addEventListener("click", () => {
    companyInput.value = inputCompanyListItemTitle.outerText.trim();
    inputCompanyListArea.style.display = "none";
  });
});

companyInput.addEventListener("focusin", () => {
  companyInput.value = "";
});

nextStage3FormButton.addEventListener("click", () => {
  if (companyInput.value == "" || subjectInput.value == "") {
    alert("Lütfen tüm alanları doldurunuz.");
  } else {
    window.location.href = "/video-thank-form/video-thank-form-step-3.html";
  }
});

backStep1Button.addEventListener("click", () => {
  window.location.href = "./video-thank-form-step-1.html";
});
