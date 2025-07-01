function convertTemperature() {
    const value = parseFloat(document.getElementById("tempInput").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const resultBox = document.getElementById("result");
  
    if (isNaN(value)) {
      resultBox.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    if (from === to) {
      result = value;
    } else if (from === "Celsius" && to === "Fahrenheit") {
      result = (value * 9/5) + 32;
    } else if (from === "Celsius" && to === "Kelvin") {
      result = value + 273.15;
    } else if (from === "Fahrenheit" && to === "Celsius") {
      result = (value - 32) * 5/9;
    } else if (from === "Fahrenheit" && to === "Kelvin") {
      result = (value - 32) * 5/9 + 273.15;
    } else if (from === "Kelvin" && to === "Celsius") {
      result = value - 273.15;
    } else if (from === "Kelvin" && to === "Fahrenheit") {
      result = (value - 273.15) * 9/5 + 32;
    }
  
    resultBox.textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
  }  