const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var submit = registrationFormIsValid();
  console.log("SUBMT: ", submit);
  return submit;
});

function registrationFormIsValid() {
  if (!usernameInput.value) return false;
  if (!emailInput.value) return false;
  if (!passwordInput.value) return false;
  if (passwordInput.value != confirmInput.value) return false;
  return true;
}
