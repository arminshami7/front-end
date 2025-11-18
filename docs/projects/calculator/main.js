import { add, subtract, multiply, divide } from './calculator.js';
import { saveHistory, getHistory, clearHistory } from './history.js';

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const backspaceButton = document.getElementById("backspace");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

let currentInput = "";
let operator = "";
let firstNumber = null;

// بروزرسانی Display با تمام اطلاعات
function updateDisplay() {
    let text = "";
    if(firstNumber !== null) text += firstNumber;
    if(operator !== "") text += " " + operator + " ";
    if(currentInput !== "") text += currentInput;
    display.textContent = text;
}

// رندر تاریخچه
function renderHistory() {
    historyList.innerHTML = "";
    const history = getHistory();

    history.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const newHistory = getHistory().filter(i => i.id !== entry.id);
            localStorage.setItem("calculatorHistory", JSON.stringify(newHistory));
            renderHistory();
        });

        li.appendChild(deleteBtn);

      // بازگرداندن عملیات به Display
li.addEventListener("click", () => {
    const parts = entry.text.split(" ");
    // نتیجه آخرین بخش است (بعد از "=")
    const result = parts[parts.length - 1];

    // تنظیم برای شروع محاسبه جدید با نتیجه
    firstNumber = parseFloat(result);
    operator = "";
    currentInput = "";

    // نمایش نتیجه در نمایشگر
    display.textContent = result;
});


        historyList.appendChild(li);
    });
}


// دکمه‌ها
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if(!isNaN(value) || value === ".") {
            currentInput += value;
            updateDisplay();
        } else if(["+", "-", "×", "÷"].includes(value)) {
            if(currentInput === "" && firstNumber === null) return;
            if(firstNumber === null) firstNumber = parseFloat(currentInput);
            operator = value;
            currentInput = "";
            updateDisplay();
        } else if(value === "=") {
            if(firstNumber === null || operator === "" || currentInput === "") return;
            const secondNumber = parseFloat(currentInput);
            let result;
            switch(operator) {
                case "+": result = add(firstNumber, secondNumber); break;
                case "-": result = subtract(firstNumber, secondNumber); break;
                case "×": result = multiply(firstNumber, secondNumber); break;
                case "÷": result = divide(firstNumber, secondNumber); break;
            }
            const operationStr = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
            saveHistory(operationStr);
            renderHistory();
            display.textContent = operationStr;
            currentInput = "";
            operator = "";
            firstNumber = null;
        } else if(value === "C") {
            currentInput = "";
            operator = "";
            firstNumber = null;
            updateDisplay();
        }
    });
});

// Backspace
backspaceButton.addEventListener("click", () => {
    if(currentInput !== "") {
        currentInput = currentInput.slice(0, -1);
    } else if(operator !== "") {
        operator = "";
    } else if(firstNumber !== null) {
        let firstStr = firstNumber.toString();
        firstStr = firstStr.slice(0, -1);
        firstNumber = firstStr === "" ? null : parseFloat(firstStr);
    }
    updateDisplay();
});

// پاک کردن تاریخچه
clearHistoryBtn.addEventListener("click", () => {
    clearHistory();
    renderHistory();
});

// نمایش اولیه تاریخچه
renderHistory();
