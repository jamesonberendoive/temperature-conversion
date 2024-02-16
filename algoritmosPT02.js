// Convertir Fahrenheit a Celsius
//Fahrenheit = Celsius  * 1.8 + 32
/*
function fahrenheitToCelsius(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

var fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
var celsius = fahrenheitToCelsius(fahrenheit);

console.log("Temperature in Celsius:", celsius);

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Convertir Celsius a Fahrenheit.
/*
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
let fahrenheit = celsiusToFahrenheit(celsius);

console.log("Temperature in Fahrenheit:", fahrenheit);

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Convertir Fahrenheit a Kelvin.
/*
function fahrenheitToKelvin(fahrenheit) {
  let kelvin = ((fahrenheit + 459.67) * 5) / 9;
  return kelvin;
}
let fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
let kelvin = fahrenheitToKelvin(fahrenheit);

console.log("Temperature in Kelvin:", kelvin);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Convertir Kelvin a Fahrenheit.
/*
function kelvinToFahrenheit(kelvin) {
  let fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
  return fahrenheit;
}
let kelvin = parseFloat(prompt("Enter the temperature in Kelvin:"));
let fahrenheit = kelvinToFahrenheit(kelvin);

console.log("Temperature in Fahrenheit:", fahrenheit);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Convertir Celsius a Kelvin.
/*
function celsiusToKelvin(celsius) {
  let kelvin = celsius + 273.15;
  return kelvin;
}
let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
let kelvin = celsiusToKelvin(celsius);

console.log("Temperature in Kelvin:", kelvin);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Convertir Kelvin to Celsius.
/*
function kelvinToCelsius(kelvin) {
  let celsius = kelvin - 273.15;
  return celsius;
}
let kelvin = parseFloat(prompt("Enter the temperature in Kelvin:"));
let celsius = kelvinToCelsius(kelvin);

console.log("Temperature in Celsius:", celsius);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calcular el promedio de un arreglo de números.
function calculateAverage(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  let avg = sum / arr.length;
  return avg;
}

let arr = [4, 6, 8, 20, 10];
console.log("The average is " + calculateAverage(arr));
