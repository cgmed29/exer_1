function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("result").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);

function displayDifference() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let difference = firstNum - secondNum;
  document.getElementById("result").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${difference}` ;
}

document.getElementById('diffButton').addEventListener("click", displayDifference);

function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let product = firstNum * secondNum;
  document.getElementById("result").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${product}` ;
}

document.getElementById('prodButton').addEventListener("click", displayProduct);

function displayQuotient() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  if (secondNum === 0) {
    document.getElementById("result").innerHTML = "Cannot divide by zero!";
  } else {
    let quotient = firstNum / secondNum;
    document.getElementById("result").innerHTML = ` ${firstNum} ÷ ${secondNum}, equals to ${quotient}`;
  }
}

document.getElementById('quotButton').addEventListener("click", displayQuotient);


