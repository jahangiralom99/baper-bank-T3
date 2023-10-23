document.getElementById("submit-btn").addEventListener("click", function () {
  // email
  const emailField = document.getElementById("email-field");
  const email = emailField.value;

  // password
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;
  console.log(password, email);

  if (email === "jahangir999@gmail.com" && password === "12345678") {
      window.location.href = "bank.html";
  } else {
      alert ("Please enter your password");
  }
});
