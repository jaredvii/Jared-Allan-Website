class Calculator {
    constructor() {
      this.previousOperandElement = document.getElementById("previous-operand");
      this.currentOperandElement = document.getElementById("current-operand");
      this.display = document.getElementById("display");
      this.clearButton = document.getElementById("clear");
      this.signButton = document.getElementById("sign");
      this.percentButton = document.getElementById("percent");
      this.divideButton = document.getElementById("divide");
      this.sevenButton = document.getElementById("seven");
      this.eightButton = document.getElementById("eight");
      this.nineButton = document.getElementById("nine");
      this.multiplyButton = document.getElementById("multiply");
      this.fourButton = document.getElementById("four");
      this.fiveButton = document.getElementById("five");
      this.sixButton = document.getElementById("six");
      this.subtractButton = document.getElementById("subtract");
      this.oneButton = document.getElementById("one");
      this.twoButton = document.getElementById("two");
      this.threeButton = document.getElementById("three");
      this.addButton = document.getElementById("add");
      this.zeroButton = document.getElementById("zero");
      this.decimalButton = document.getElementById("decimal");
      this.equalsButton = document.getElementById("equals");
  
      this.currentOperand = "0";
      this.previousOperand = "";
      this.operation = undefined;
  
      this.updateDisplay();
    }
  
    clear() {
      this.currentOperand = "0";
      this.previousOperand = "";
      this.operation = undefined;
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    appendNumber(number) {
      if (number === "." && this.currentOperand.includes(".")) return;
  
      if (this.currentOperand === "0" && number !== ".") {
        this.currentOperand = number;
      } else {
        this.currentOperand += number;
      }
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === "") return;
  
      if (this.previousOperand !== "") {
        this.compute();
      }
  
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
  
      this.updateDisplay();
    }
  
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
  
      if (isNaN(prev) || isNaN(current)) return;
  
      switch (this.operation) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          break;
        case "*":
          computation = prev * current;
          break;
        case "/":
          computation = prev / current;
          break;
        default:
          return;
      }
  
      this.currentOperand = computation.toString();
      this.operation = undefined;
      this.previousOperand = "";
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split(".")[0]);
      const decimalDigits = stringNumber.split(".")[1];
      let integerDisplay;
  
      if (isNaN(integerDigits)) {
        integerDisplay = "";
      } else {
        integerDisplay = integerDigits.toLocaleString("en", {
          maximumFractionDigits: 0
        });
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }
  
    updateDisplay() {
      if (this.operation != null) {
        this.display.value = `${this.getDisplayNumber(this.previousOperand)} ${
          this.operation
        } ${this.currentOperand ? this.currentOperand : ""}`;
      } else {
        this.display.value = this.getDisplayNumber(this.currentOperand);
      }
    }
  }
  
  const calculator = new Calculator();
  
  calculator.clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
  });
  
  calculator.signButton.addEventListener("click", () => {
    calculator.currentOperand = calculator.currentOperand * -1;
    calculator.updateDisplay();
  });
  
  calculator.percentButton.addEventListener("click", () => {
    calculator.currentOperand = calculator.currentOperand / 100;
    calculator.updateDisplay();
  });
  
  calculator.divideButton.addEventListener("click", () => {
    calculator.chooseOperation("/");
    calculator.updateDisplay();
  });
  
  calculator.multiplyButton.addEventListener("click", () => {
    calculator.chooseOperation("*");
    calculator.updateDisplay();
  });
  
  calculator.subtractButton.addEventListener("click", () => {
    calculator.chooseOperation("-");
    calculator.updateDisplay();
  });
  
  calculator.addButton.addEventListener("click", () => {
    calculator.chooseOperation("+");
    calculator.updateDisplay();
  });
  
  calculator.equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
  });
  
  calculator.zeroButton.addEventListener("click", () => {
    calculator.appendNumber("0");
    calculator.updateDisplay();
  });
  
  calculator.oneButton.addEventListener("click", () => {
    calculator.appendNumber("1");
    calculator.updateDisplay();
  });
  
  calculator.twoButton.addEventListener("click", () => {
    calculator.appendNumber("2");
    calculator.updateDisplay();
  });
  
  calculator.threeButton.addEventListener("click", () => {
    calculator.appendNumber("3");
    calculator.updateDisplay();
  });
  
  calculator.fourButton.addEventListener("click", () => {
    calculator.appendNumber("4");
    calculator.updateDisplay();
  });
  
  calculator.fiveButton.addEventListener("click", () => {
    calculator.appendNumber("5");
    calculator.updateDisplay();
  });
  
  calculator.sixButton.addEventListener("click", () => {
    calculator.appendNumber("6");
    calculator.updateDisplay();
  });
  
  calculator.sevenButton.addEventListener("click", () => {
    calculator.appendNumber("7");
    calculator.updateDisplay();
  });
  
  calculator.eightButton.addEventListener("click", () => {
    calculator.appendNumber("8");
    calculator.updateDisplay();
  });
  
  calculator.nineButton.addEventListener("click", () => {
    calculator.appendNumber("9");
    calculator.updateDisplay();
  });
  
  calculator.decimalButton.addEventListener("click", () => {
    calculator.appendNumber(".");
    calculator.updateDisplay();
  });
  