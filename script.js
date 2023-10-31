let writeThankButton = document.getElementById("btn-write-thank");
let videoThankButton = document.getElementById("btn-video-thank");

writeThankButton.addEventListener("click", () => {
  window.location.href = "/write-thank-form/write-thank-form-step-1.html";
});

videoThankButton.addEventListener("click", () => {
  window.location.href = "/video-thank-form/video-thank-form-step-1.html";
});
