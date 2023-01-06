const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
document.getElementById("submit").onclick = function (e) {
  e.preventDefault();
  var submit = validateForm();
  return submit;
};

function validateForm() {
  console.log("VALIDATE");
  console.log(usernameInput.value);
  console.log(passwordInput.value);
  console.log(confirmInput.value);
  return true;
}
