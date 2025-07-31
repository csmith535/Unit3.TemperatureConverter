function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    return "It's very cold.";
  } else if (celsius < 20) {
    return "It's cold.";
  } else if (celsius < 30) {
    return "It's warm.";
  } else if (celsius < 40) {
    return "It's hot.";
  } else {
    return "It's very hot.";
  }
}
