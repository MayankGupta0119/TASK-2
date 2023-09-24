function multiplyNumbers() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    const result = firstNumber * secondNumber;
    document.getElementById("resultDisplay").textContent = result;
  } else {
    document.getElementById("resultDisplay").textContent = "Invalid input";
  }
}

function divideNumbers() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    if (secondNumber === 0) {
      document.getElementById("resultDisplay").textContent = "Division by zero";
    } else {
      const result = firstNumber / secondNumber;
      document.getElementById("resultDisplay").textContent = result;
    }
  } else {
    document.getElementById("resultDisplay").textContent = "Invalid input";
  }
}
