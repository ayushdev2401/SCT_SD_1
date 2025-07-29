function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.textContent = "❌ Please enter a valid number.";
    return;
  }

  let tempInCelsius;

  // Convert input to Celsius
  switch (from) {
    case "celsius":
      tempInCelsius = input;
      break;
    case "fahrenheit":
      tempInCelsius = (input - 32) * (5 / 9);
      break;
    case "kelvin":
      tempInCelsius = input - 273.15;
      break;
  }

  let finalTemp;

  // Convert Celsius to desired unit
  switch (to) {
    case "celsius":
      finalTemp = tempInCelsius;
      break;
    case "fahrenheit":
      finalTemp = tempInCelsius * (9 / 5) + 32;
      break;
    case "kelvin":
      finalTemp = tempInCelsius + 273.15;
      break;
  }

  resultDiv.textContent = `🌡️ Result: ${finalTemp.toFixed(2)} ${unitSymbol(to)}`;
}

function unitSymbol(unit) {
  switch (unit) {
    case "celsius": return "°C";
    case "fahrenheit": return "°F";
    case "kelvin": return "K";
  }
}
