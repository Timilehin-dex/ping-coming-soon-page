function validateEmail() {
  const emailInput = document.getElementById("email");
  const errorMsg = document.getElementById("error-msg");
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue || !emailPattern.test(emailValue)) {
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("border-secondary-lightRed");
    return false;
  }

  errorMsg.classList.add("hidden");
  emailInput.classList.remove("border-secondary-lightRed");
  return true;
}
