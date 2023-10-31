const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip-code");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const form = document.getElementById("form");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});
country.addEventListener("input", (event) => {
  if (country.validity.patternMismatch) {
    country.setCustomValidity("Countries cannot contain numbers or symbols");
  } else {
    country.setCustomValidity("");
  }
});

zip.addEventListener("input", (event) => {
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity("Please use a proper ZIP Code format");
  } else {
    zip.setCustomValidity("");
  }
});

confirmPass.addEventListener("input", (event) => {
  if (confirmPass.value == password.value) {
    confirmPass.setCustomValidity("");
  } else {
    confirmPass.setCustomValidity("Must match password");
  }
});

form.addEventListener("submit", (event) => {
  if (form.checkValidity()) {
    prompt("2 thumbs up!");
  }
});
