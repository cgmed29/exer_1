// Function for addition
function addNumbers() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);
  let result = firstNum + secondNum;
  document.getElementById('result').innerHTML = result;
}

// Function for subtraction
function subtractNumbers() {
  let thirdNum = Number(document.getElementById('thirdNum').innerHTML);
  let fourthNum = Number(document.getElementById('fourthNum').innerHTML);
  let result = thirdNum - fourthNum;
  document.getElementById('result').innerHTML = result;
}

// Function for multiplication
function multiplyNumbers() {
  let fifthNum = Number(document.getElementById('fifthNum').innerHTML);
  let sixthNum = Number(document.getElementById('sixthNum').innerHTML);
  let result = fifthNum * sixthNum;
  document.getElementById('result').innerHTML = result;
}

// Function for division
function divideNumbers() {
  let seventhNum = Number(document.getElementById('seventhNum').innerHTML);
  let eighthNum = Number(document.getElementById('eighthNum').innerHTML);
  let result = seventhNum / eighthNum;
  document.getElementById('result').innerHTML = result;
}

// Add event listeners to buttons
document.getElementById('sumButton').addEventListener('click', addNumbers);
document.getElementById('diffButton').addEventListener('click', subtractNumbers);
document.getElementById('prodButton').addEventListener('click', multiplyNumbers);
document.getElementById('quotButton').addEventListener('click', divideNumbers);


/* function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("result").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);

function displayDifference() {
  let thirdNum = Number(document.getElementById('firstNum').innerHTML)
  let fourthNum = Number(document.getElementById('secondNum').innerHTML)

  let difference = firstNum - secondNum;
  document.getElementById("result").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${difference}` ;
}

document.getElementById('diffButton').addEventListener("click", displayDifference);

function displayProduct() {
  let fifthNum = Number(document.getElementById('firstNum').innerHTML);
  let sixthNum = Number(document.getElementById('secondNum').innerHTML);

  let product = firstNum * secondNum;
  document.getElementById("result").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${product}` ;
}

document.getElementById('prodButton').addEventListener("click", displayProduct);

function displayQuotient() {
  let seventhNum = Number(document.getElementById('firstNum').innerHTML);
  let eighthNum = Number(document.getElementById('secondNum').innerHTML);

  if (secondNum === 0) {
    document.getElementById("result").innerHTML = "Cannot divide by zero!";
  } else {
    let quotient = firstNum / secondNum;
    document.getElementById("result").innerHTML = ` ${firstNum} ÷ ${secondNum}, equals to ${quotient}`;
  }
}

document.getElementById('quotButton').addEventListener("click", displayQuotient); */


