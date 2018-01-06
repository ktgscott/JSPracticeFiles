//Today's forecast
const kelvin = prompt('What is the Kelvin temperature today?');

//Convert Kelvin to Celsius
const celsius = kelvin - 273;

//Calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

//String interpolation to log the temperature in fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
