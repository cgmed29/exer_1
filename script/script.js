// Function for addition
function addNumbers() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);
  let result = firstNum + secondNum;
  document.getElementById('sumResult').textContent = `Sum: ${result}`;
}

// Function for subtraction
function subtractNumbers() {
  let thirdNum = Number(document.getElementById('thirdNum').innerHTML);
  let fourthNum = Number(document.getElementById('fourthNum').innerHTML);
  let result = thirdNum - fourthNum;
  document.getElementById('diffResult').textContent = `Difference: ${result}`;
}

// Function for multiplication
function multiplyNumbers() {
  let fifthNum = Number(document.getElementById('fifthNum').innerHTML);
  let sixthNum = Number(document.getElementById('sixthNum').innerHTML);
  let result = fifthNum * sixthNum;
  document.getElementById('prodResult').textContent = `Product: ${result}`;
}

// Function for division
function divideNumbers() {
  let seventhNum = Number(document.getElementById('seventhNum').innerHTML);
  let eighthNum = Number(document.getElementById('eighthNum').innerHTML);
  let result = seventhNum / eighthNum;
  document.getElementById('quotResult').textContent = `Quotient: ${result}`;
}

// Add event listeners to buttons
document.getElementById('sumButton').addEventListener('click', addNumbers);
document.getElementById('diffButton').addEventListener('click', subtractNumbers);
document.getElementById('prodButton').addEventListener('click', multiplyNumbers);
document.getElementById('quotButton').addEventListener('click', divideNumbers);

// Get the input fields and result span for sum
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const sumResult = document.getElementById("sumResult");
const sumButton = document.getElementById("sumButton");

// Add a click event listener to the sum button
sumButton.addEventListener("click", () => {
    // Get the values from the input fields and convert them to numbers
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);

    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the calculation and display the result
        const sum = num1 + num2;
        sumResult.textContent = `Sum: ${sum}`;
    } else {
        sumResult.textContent = "Invalid input";
    }
});

// Get the input fields and result span for subtraction
const inputNum3 = document.getElementById("inputNum3");
const inputNum4 = document.getElementById("inputNum4");
const diffResult = document.getElementById("diffResult");
const diffButton = document.getElementById("diffButton");

// Add a click event listener to the subtraction button
diffButton.addEventListener("click", () => {
    // Get the values from the input fields and convert them to numbers
    const num3 = parseFloat(inputNum3.value);
    const num4 = parseFloat(inputNum4.value);

    // Check if the input is valid
    if (!isNaN(num3) && !isNaN(num4)) {
        // Perform the calculation and display the result
        const difference = num3 - num4;
        diffResult.textContent = `Difference: ${difference}`;
    } else {
        diffResult.textContent = "Invalid input";
    }
});

// Get the input fields and result span for multiplication
const inputNum5 = document.getElementById("inputNum5");
const inputNum6 = document.getElementById("inputNum6");
const prodResult = document.getElementById("prodResult");
const prodButton = document.getElementById("prodButton");

// Add a click event listener to the multiplication button
prodButton.addEventListener("click", () => {
    // Get the values from the input fields and convert them to numbers
    const num5 = parseFloat(inputNum5.value);
    const num6 = parseFloat(inputNum6.value);

    // Check if the input is valid
    if (!isNaN(num5) && !isNaN(num6)) {
        // Perform the calculation and display the result
        const product = num5 * num6;
        prodResult.textContent = `Product: ${product}`;
    } else {
        prodResult.textContent = "Invalid input";
    }
});

// Get the input fields and result span for division
const inputNum7 = document.getElementById("inputNum7");
const inputNum8 = document.getElementById("inputNum8");
const quotResult = document.getElementById("quotResult");
const quotButton = document.getElementById("quotButton");

// Add a click event listener to the division button
quotButton.addEventListener("click", () => {
    // Get the values from the input fields and convert them to numbers
    const num7 = parseFloat(inputNum7.value);
    const num8 = parseFloat(inputNum8.value);

    // Check if the input is valid
    if (!isNaN(num7) && !isNaN(num8) && num8 !== 0) {
        // Perform the calculation and display the result
        const quotient = num7 / num8;
        quotResult.textContent = `Quotient: ${quotient}`;
    } else {
        quotResult.textContent = "Invalid input or division by zero";
    }
});

function isNumeric(input) {
    return /^[0-9]+$/.test(input);
}

