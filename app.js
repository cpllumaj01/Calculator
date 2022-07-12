/*Operator functions*/
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

function calculate(funct, a, b){
    return funct(a,b);
}

/*setting variables to hold input numbers and operator*/
let expression = '';
let reset = false;

/*defining output element*/
const output = document.getElementById('output');

/*settign event listener to numbers*/ 
const buttons = document.querySelectorAll('.number');
buttons.forEach(button => {
  button.addEventListener('click', function handleClick(event) {
    if(reset){
        output.innerText = "";
        reset = false;
    }
    expression += button.innerText;
    output.innerText += button.innerText;
    console.log(expression);
  });
});

/*settign event listener to numbers*/ 
const operations = document.querySelectorAll('.operator');
operations.forEach(operation => {
  operation.addEventListener('click', function handleClick(event) {
    expression += " " + operation.innerText + " ";
    reset = true;
    console.log(expression);
  });
});

/*evaluates entered expression*/
const evaluate = document.getElementById('evaluate');
evaluate.addEventListener('click', function func(event) {
    output.innerText = eval(expression);
    expression = eval(expression);
    console.log(expression);
})

/*Clears calculator*/
const clear = document.getElementById('clear');
clear.addEventListener('click', function func(event){
    expression = '';
    output.innerText = '';
})