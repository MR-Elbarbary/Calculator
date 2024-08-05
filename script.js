let operators= ["+", "-", "/", "^", "X", "%"]
let operator = false

function evaluate(formula) {
    if (operators.includes(formula[formula.length - 1]) || operators.includes(formula[0])) {
        return
    }
    
}

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function power(num1, num2) {
    return num1 ** num2
}

function mod(num1, num2) {
    return num1 % num2
}


function Del(display) {
    let array = [...display.textContent]
    if(operators.includes(array[array.length - 1])){
        operator = false
    }
    array.pop();
    display.textContent = array.join('');
}

document.addEventListener("DOMContentLoaded", () =>{
    let display = document.querySelector(".display")
    let normalButtons = document.querySelectorAll(".common")
    let result = document.querySelector(".result")
    let del = document.querySelector("#delete")
    let ac = document.querySelector("#ac")
    let equals = document.querySelector("#equal")

    equals.addEventListener("click", () => {
        result.textContent = evaluate(display.textContent)
    })

    del.addEventListener("click", () =>{ Del(display) })

    ac.addEventListener("click", () =>{
        display.innerHTML = ""
        operator = false
    })

    normalButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            if (operators.includes(event.target.innerHTML))
            {
                if(operator){
                    return
                }
                else if(display.textContent === ''){
                    return
                }
                operator = true
            }
            display.textContent += event.target.textContent
        })
    });
})