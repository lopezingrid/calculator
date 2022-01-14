let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let actualScreenOperation = document.querySelector("#actualScreenOperation");
let lastScreenOperation = document.querySelector("#lastScreenOperation");
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete");
let pointButton = document.querySelector("#point")
let shouldResetScreen = false;

let firstNum = "";
let secondNum = "";
let operatorActual = " ";
//let displayedNum = display.textContent;

clearButton.addEventListener( "click", () => clear() );
equalsButton.addEventListener( "click", () => evaluate() );
deleteButton.addEventListener( "click", () => deleteNumber() );
pointButton.addEventListener( "click", () => appendPoint() );


numberButtons.forEach(button => 
    button.addEventListener( "click", () => addNumber(button.textContent))
)

operatorButtons.forEach(button => 
    button.addEventListener( "click", () => {

      //firstNum = displayedNum;
      addOperator(button.textContent);
      operatorActual = button.textContent;

    })
)


function addNumber(value) {
  if(actualScreenOperation.textContent == "0" || shouldResetScreen)
    resetScreen()
  if(actualScreenOperation)
    actualScreenOperation.textContent += value;
}

function resetScreen() {
  actualScreenOperation.textContent = "";
  shouldResetScreen = false;
}

function addOperator(operator) {
    firstNum = actualScreenOperation.textContent;
    operatorActual = operator;
    lastScreenOperation.textContent = ` ${firstNum} ${operatorActual} `
    actualScreenOperation.textContent = " ";
}

function appendPoint() {
  if (actualScreenOperation.textContent.includes(".")) return;
actualScreenOperation.textContent += ".";
}

function evaluate() {
  secondNum = actualScreenOperation.textContent;
  lastScreenOperation.textContent += " " + secondNum + " = ";
  actualScreenOperation.textContent = operate(operatorActual, firstNum, secondNum)
}

function operate(operator, a, b) {
    a = Number(firstNum);
    b = Number(secondNum);

    switch(operator) {
        case "+" :
          return suma(a, b);
        case "-" :
          return resta(a, b);
        case "*" :
          return multiply(a, b);
        case "/" :
          return division(a, b);
        case "%" :
          return module(a, b);
        default:
          console.log("no");
          return null;
      }
}

function suma(a, b) {
  return a + b
}
function resta(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function division(a, b) {
  return a / b
}
function module(a, b) {
  return a % b
}

function clear() {
  firstOperand = " ";
  secondOperand = " ";
  actualScreenOperation.textContent = "0";
  lastScreenOperation.textContent = "";
}

function deleteNumber() {
  actualScreenOperation.textContent = actualScreenOperation.textContent
  .toString()
  .slice(0, -1)
}













