let operators= ["+", "-", "/", "^", "X", "%"]
let operator = false

const chooseOperator = {
    '+': add,
    '-': subtract,
    '/': divide,
    '^': power,
    'X': multiply,
    '%': mod,
}

function evaluate(formula) {
    if (operators.includes(formula[formula.length - 1]) || operators.includes(formula[0])) {
        return
    }
    let regularExp = /[\+\-\/\^X%]/; 
    let index = formula.search(regularExp)
    let equation = [formula.slice(0,index), formula[index], formula.slice(index+1)]
    let result = chooseOperator[equation[1]](Number(equation[0]), Number(equation[2]))
    if (result === NaN) {
        result = "Error"
    }
    return result
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

function clear(element) {
    element.textContent = ''
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
                    if(result.textContent === ''){
                        return
                    }
                    else{
                        display.textContent = result.textContent
                        clear(result.textContent)
                    }
                }
                operator = true
            }
            display.textContent += event.target.textContent
        })
    });
})