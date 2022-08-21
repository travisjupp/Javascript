// kelvin constant variable is the weather for today in kelvin which is at 293
const kelvin = 300;

// celsius is 273 degrees lower than kelvin
const celsius = kelvin - 273;

// fahrenheit is Celsius times nine fifths plus thirty two this variable suggests that
let fahrenheit = celsius * (9/5) + 32;

// To convert from fahrenheit to celsius use the formula: * (9/5) + 32;
// when converting from Celsius to Fahrenheit you often get a decimal and therefore the variable is set using the let keyword so the value can change
fahrenheit = Math.floor(fahrenheit);

// Conversion to the Newton scale
let newton = celsius * (33/100);

// rounding down using the Math library
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees
Fahrenheit, and ${celsius} degrees Celsius
Using the Newton scale the temp is ${newton}`);