function validate(fn, variables) {
    const varValues = Object.values(variables);
    if (fn.length !== varValues.length) {
        return 'No. of parameter is Invalid Try again';
    }

}

function calculate(fn, variables) {
    const validationError = validate(fn, variables);
    if (validationError) {
        return validationError;
    }

    const varValues = Object.values(variables);
    return fn(...varValues);
}

// Here  define basic mathematical operations for use in the calculator
const add = (nums1, nums2, nums3) => nums1 + nums2 + nums3;
const multiply = (nums1, nums2) => nums1 * nums2;
const subtract = (nums1, nums2) => nums1 - nums2;
const divide = (nums1, nums2) => nums1 / nums2;
const modulus = (nums1, nums2) => nums1 % nums2;

// Temperature conversion functions
const fahrenheitToCelsius = degreeFahrenheit => (degreeFahrenheit - 32) * 5 / 9;
const celsiusToFahrenheit = degreeCelsius => (degreeCelsius * 9 / 5) + 32;

// Area calculation functions
const rectangularArea = (length, breadth) => length * breadth;
const squareArea = side => side * side;
const circleArea = radius => Math.PI * radius * radius;
//function to  calculate square root

const squareRoot = number => Math.sqrt(number);

// Operations with functions and variables and description
const Operations = [
    { fn: add, vars: { nums1: 1, nums2: 2 ,nums:3}, description: 'Addition' },
    { fn: subtract, vars: { nums1: 10, nums2: 5 }, description: 'Subtraction' },
    { fn: multiply, vars: { nums1: 3, nums2: 4 }, description: 'Multiplication' },
    { fn: divide, vars: { nums1: 20, nums2: 4 }, description: 'Division' },
    { fn: modulus, vars: { nums1: 16, nums2: 3 }, description: 'Modulus' },
    { fn: squareArea, vars: { side: 4 }, description: 'Area of Square' },
    { fn: celsiusToFahrenheit, vars: { degreeCelsius: 30 }, description: 'Celsius to Fahrenheit' },
    { fn: fahrenheitToCelsius, vars: { degreeFahrenheit: 86 }, description: 'Fahrenheit to Celsius' },
    { fn: rectangularArea, vars: { length: 5, breadth: 8 }, description: 'Rectangular Area' },
    { fn: circleArea, vars: { radius: 7 }, description: 'Circle Area' },
    { fn: squareRoot, vars: { number: 16 }, description: 'Square Root' }
];


Operations.forEach(({ fn, vars, description }) => {
    const result = calculate(fn, vars);
    console.log(`${description} =`, result);
});