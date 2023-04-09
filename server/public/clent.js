$(document).ready(onReady);

function onReady() {
    console.log('client side');
    $('#totals-btn').on('click', captureInput);
    $('#plus-btn').on('click',  addition)
    $('#minus-btn').on('click', subtraction)
    $('#times-btn').on('click', multiplication)
    $('#divide-btn').on('click', divition)
    $('#clear-btn"').on('click', clear)
}

function captureInput(event) {
    event.preventDefault();

let symbols;

let inputValues = {
    input1: $('#first-number-input').val(),
    input2: symbols,
    input3: $('#last-number-input').val()
}
console.log(inputValues);

$.ajax({
    method: 'POST',
    url: '/calculator',
    data: inputValues
  }).then(function(responsePost){
    calculationHistory();
  });
}

function calculationHistory() {
    
}


function addition() {
    symbols= 'plus';
}
function divition() {
    symbols = 'minus';
}
function multiplication() {
    symbols = 'times';
}
function divition(params) {
    symbols = 'divide';
}
 