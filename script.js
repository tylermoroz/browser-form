const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");

// const passwordConfirmation = () => {
//     if(confirmPassword.value == password.value){
//         passwordConfirmation.setCustomValidity("");
//     } else {
//         passwordConfirmation.setCustomValidity("Must match password");
//     }
// }

confirmPass.addEventListener("input", (event) => {
  if (confirmPass.value == password.value) {
    confirmPass.setCustomValidity("");
  } else {
    confirmPass.setCustomValidity("Must match password");
  }
});
