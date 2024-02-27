const btn = document.getElementById("submit-btn");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const form = document.getElementById("my-form");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    (validateName() == true) &
    (validateEmail() == true) &
    (validatePassword() == true)
  ) {
    alert("Form submit successfully !!!");
    form.reset();
    clearField();
  }
});

const validateName = () => {
  let nameValue = document.getElementById("name").value;
  if (nameValue.length === 0) {
    nameError.textContent = "Name is required";
    nameError.previousElementSibling.textContent = "❌";
    return false;
  }

  if (!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.textContent = "Write full name";
    nameError.previousElementSibling.textContent = "❌";
    return false;
  }

  nameError.textContent = "";
  nameError.previousElementSibling.textContent = "✔";
  return true;
};

const validateEmail = () => {
  let emailValue = document.getElementById("email").value;
  if (emailValue.length === 0) {
    emailError.textContent = "Email is required";
    emailError.previousElementSibling.textContent = "❌";
    return false;
  }

  if (
    !emailValue.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError.textContent = "Provide valid email";
    emailError.previousElementSibling.textContent = "❌";
    return false;
  }

  emailError.textContent = "";
  emailError.previousElementSibling.textContent = "✔";
  return true;
};

const validatePassword = () => {
  let passwordValue = document.getElementById("password").value;
  if (passwordValue.length === 0) {
    passwordError.textContent = "Password is required";
    passwordError.previousElementSibling.textContent = "❌";
    return false;
  }

  if (
    !passwordValue.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passwordError.textContent =
      "Password should contain 1 Uppercase, 1 Lowercase, 1 digit & 1 Alphabet";
    passwordError.previousElementSibling.textContent = "❌";
    return false;
  }

  passwordError.textContent = "";
  passwordError.previousElementSibling.textContent = "✔";
  return true;
};
const clearField = () => {
  passwordError.previousElementSibling.textContent = "";
  emailError.previousElementSibling.textContent = "";
  nameError.previousElementSibling.textContent = "";
};
