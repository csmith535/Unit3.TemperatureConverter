function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    return `That would be ${celsius}°C. It's very cold.`;
  } else if (celsius < 20) {
    return `That would be ${celsius}°C. It's cold.`;
  } else if (celsius < 30) {
    return `That would be ${celsius}°C. It's warm.`;
  } else if (celsius < 40) {
    return `That would be ${celsius}°C. It's hot.`;
  } else {
    return `That would be ${celsius}°C. It's very hot.`;
  }
}

const fahrenheit = prompt("Enter a temperature in Fahrenheit:");
const description = describeTemperature(fahrenheit);
alert(description);
