function toCelsius(num1) {
  const total = (num1 - 32) * .5556;
  return total;
}

const num1 = parseFloat(prompt("Enter in the current Temp in Fahrenheit:"));
window.alert(toCelsius(num1));