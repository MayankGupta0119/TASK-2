function submitForm() {
  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;
  let websiteValue = document.getElementById("website").value;
  let messageValue = document.getElementById("message").value;

  // Clear error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("websiteError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  if (nameValue === "") {
    document.getElementById("nameError").innerHTML = "This field is required";
  }
  if (emailValue === "") {
    document.getElementById("emailError").innerHTML =
      "A valid Email address is required";
  }
  if (websiteValue === "") {
    document.getElementById("websiteError").innerHTML =
      "A valid URL is required";
  }
  if (messageValue === "") {
    document.getElementById("messageError").innerHTML =
      "This field is required";
  }
}
