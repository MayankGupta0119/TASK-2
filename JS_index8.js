function checkStrength(inputId, errorId, minLength) {
  let inputValue = document.getElementById(inputId).value;
  let errorElement = document.getElementById(errorId);

  if (inputValue.length < minLength) {
    errorElement.innerText = "Poor";
    errorElement.style.color = "red";
  } else {
    errorElement.innerText = "Good";
    errorElement.style.color = "green";
  }
}

function checkEqual(inputId, input2Id, errorId, minLength) {
  let inputValue = document.getElementById(inputId).value;
  let input2Value = document.getElementById(input2Id).value;
  let errorElement = document.getElementById(errorId);

  if (inputValue === input2Value && inputValue.length >= minLength) {
    errorElement.innerText = "Matched/Good";
    errorElement.style.color = "green";
  } else {
    errorElement.innerText = "Mismatched/Poor";
    errorElement.style.color = "red";
  }
}

// First Name
document.getElementById("fn").addEventListener("keyup", function () {
  checkStrength("fn", "fn-error", 3);
});

// Last Name
document.getElementById("ln").addEventListener("keyup", function () {
  checkStrength("ln", "ln-error", 3);
});

// Email
document.getElementById("email").addEventListener("keyup", function () {
  checkStrength("email", "email-error", 10);
});

// Password
document.getElementById("pass").addEventListener("keyup", function () {
  checkStrength("pass", "pass-error", 8);
});

// Re-enter Password
document.getElementById("re-pass").addEventListener("keyup", function () {
  checkEqual("pass", "re-pass", "re-pass-error", 8);
});

// Age
document.getElementById("age").addEventListener("keyup", function () {
  checkStrength("age", "age-error", 2);
});

// Phone Number
document.getElementById("phno").addEventListener("keyup", function () {
  checkStrength("phno", "phno-error", 10);
});

// Address
document.getElementById("address").addEventListener("keyup", function () {
  checkStrength("address", "address-error", 15);
});

// State
document.getElementById("state").addEventListener("keyup", function () {
  checkStrength("state", "state-error", 3);
});
