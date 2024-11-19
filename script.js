function clearDisplay() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  const resultField = document.getElementById("result");
  resultField.value = resultField.value.slice(0, -1);
}

function append(value) {
  const resultField = document.getElementById("result");
  resultField.value += value;
}

function calculate() {
  const resultField = document.getElementById("result");
  try {
    resultField.value = eval(resultField.value.replace('×', '*').replace('÷', '/'));
  } catch {
    resultField.value = "Error";
  }
}
