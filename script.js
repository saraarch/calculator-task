// Main calculator container
const calculator = document.createElement("div");
calculator.className = "calculator";

// Input display
const inputBox = document.createElement("input");
inputBox.type = "text";
inputBox.placeholder = "0";
inputBox.id = "inputBox";
inputBox.readOnly = true;
calculator.appendChild(inputBox);

// Row and button values
const rows = [
    ["AC", "DEL", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="]
];

// Loop to create rows and buttons
rows.forEach(row => {
    const rowDiv = document.createElement("div");
    row.forEach(value => {
        const button = document.createElement("button");
        button.textContent = value;
        button.className = 
            value === "AC" ? "operator ac" : 
            value === "DEL" ? "operator del" : 
            value === "=" ? "equalB" : 
            ["%", "/", "*", "-", "+"].includes(value) ? "operator" : "";
        rowDiv.appendChild(button);
    });
    calculator.appendChild(rowDiv);
});

// Append calculator to body
document.body.appendChild(calculator);

// Calculator functionality
let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button"); 
let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerText == "AC") {
            string = "";
            display.value = string;
        } 
        else if (e.target.innerText == "DEL") {
            string = string.slice(0, -1);
            display.value = string;
        } 
        else if (e.target.innerText == "=") {
            try {
                display.value = eval(string);
                string = eval(string).toString();  // Update string with result for continued calculations
            } catch {
                display.value = "Error";
                string = "";
            }
        } 
        else {
            string += e.target.innerText;
            display.value = string;
        }
    });
});

