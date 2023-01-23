const users = [];
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");

const registerButton = document.getElementById("register");

if (registerButton) {
  registerButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (registrationFormIsValid()) {
      registerUser({
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      });
    }
  });
}

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
    localStorage.setItem("users", JSON.stringify(users));
  }
}

function userExists(user) {
  const userFound = users.find(
    (usr) => usr.userName == user.userName || usr.email == user.email
  );
  return !!userFound;
}

const loginButton = document.getElementById("login");

if (loginButton) {
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (userIsAuthenticated(usernameInput.value, passwordInput.value)) {
      console.log("YAY! You're logged in!");
    }
  });
}

function userIsAuthenticated(username, password) {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  const authenticatedUser = storedUsers.find(
    (usr) => usr.username == username && usr.password == password
  );
  return !!authenticatedUser;
}
