const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const button = document.getElementById("btton");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (userName.value.trim() === "admin" && passWord.value.trim() === "1234") {
    successMessage.style.display = "flex";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "flex";
    successMessage.style.display = "none";
  }
});
gsap.to(".login-container", {
  opacity: 1,
  duration: 2,
});
gsap.to(".header", {
  delay: 1,
  opacity: 1,
  duration: 2,
});
gsap.to(".username-area", {
  delay: 1.5,
  opacity: 1,
  duration: 2,
});
gsap.to(".password-area", {
  delay: 2,
  opacity: 1,
  duration: 2,
});
gsap.to(".remember-me-area", {
  delay: 2.5,
  opacity: 1,
  duration: 2,
});
gsap.to(".button-area", {
  delay: 3,
  opacity: 1,
  duration: 2,
});
gsap.to(".forgot-password-area", {
  delay: 3.5,
  opacity: 1,
  duration: 2,
});
gsap.to(".sign-up-area", {
  delay: 4,
  opacity: 1,
  duration: 2,
});
