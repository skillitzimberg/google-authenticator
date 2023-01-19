const users = [];
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");

document.getElementById("register").addEventListener("click", function (e) {
  e.preventDefault();
  if (registrationFormIsValid()) {
    registerUser({
      userName: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });
  }
});

function registrationFormIsValid() {
  if (!usernameInput.value) return false;
  if (!emailInput.value) return false;
  if (!passwordInput.value) return false;
  if (passwordInput.value != confirmInput.value) return false;
  return true;
}

function registerUser(user) {
  if (!userExists(user)) {
    users.push(user);
  }
}

function userExists(user) {
  const userFound = users.find(
    (usr) => usr.userName == user.userName || usr.email == user.email
  );
  return !!userFound;
}
