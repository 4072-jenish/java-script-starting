document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("firstnameError").innerHTML = "";
  document.getElementById("lastnameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("genderError").innerHTML = "";
  
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  
  if (firstname === "") {
      document.getElementById("firstnameError").innerHTML = "First name is required.";
  }
  if (lastname === "") {
      document.getElementById("lastnameError").innerHTML = "Last name is required.";
  }
  if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required.";
  }
  if (password === "") {
      document.getElementById("passwordError").innerHTML = "Password is required.";
  }
  if (!gender) {
      document.getElementById("genderError").innerHTML = "Please select your gender.";
  }
  if (firstname && lastname && email && password && gender) {
      alert("Form submitted successfully!");
      document.getElementById("loginForm").reset();
  }
});