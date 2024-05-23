//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("remember-me");
  const submitButton = document.getElementById("submit");
  const existingButton = document.getElementById("existing");

  // Check if there are saved details in local storage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    usernameInput.value = savedUsername;
    passwordInput.value = savedPassword;
    rememberMeCheckbox.checked = true;
    existingButton.style.display = "block";
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Save or remove details based on "remember me" checkbox
    if (rememberMeCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    alert(`Logged in as ${username}`);
  }

  // Function to handle existing user login
  function handleExistingUserLogin() {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
  }

  submitButton.addEventListener("click", handleSubmit);
  existingButton.addEventListener("click", handleExistingUserLogin);
});
