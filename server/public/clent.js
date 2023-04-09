$(document).ready(onReady);

function onReady() {
    console.log('client side');
    $('#totals-btn').on('click', captureInput);
    $('#plus-btn').on('click',  addition);
    $('#minus-btn').on('click', subtraction);
    $('#times-btn').on('click', multiplication);
    $('#divide-btn').on('click', divition);
    $('#clear-btn').on('click', clear);
}

function addition(event) {
    event.preventDefault();
    symbols= 'plus';
}
function subtraction(event) {
    event.preventDefault();
    symbols = 'minus';
}
function multiplication(event) {
    event.preventDefault();
    symbols = 'times';
}
function divition(event) {
    event.preventDefault();
    symbols = 'divide';
}

function captureInput(event) {
    event.preventDefault();

let symbol = symbols;
let inputNumber1 = $('#first-number-input').val();
let inputNumber2 = $('#last-number-input').val();

let inputValues = {
    input1: inputNumber1,
    input2: symbol,
    input3: inputNumber2
}
console.log(inputValues);

$.ajax({
    method: 'POST',
    url: '/calculator',
    data: inputValues,
  }).then(function(responsePost){
    console.log(responsePost);
    calculationHistory();
  });
}

function calculationHistory() {
    $.ajax({
        method: 'GET',
        url: '/calculator',
      }).then(function(responseGet){ 
        console.log(responseGet);
        let answer = responseGet.answer
        let pastHistory = responseGet.pastHistory

        $('#Answer').empty();
        $('#Answer').text(`${answer}`);

        $('#past-calculations').empty();

        for (let history of pastHistory) {
          $('#past-calculations').append(`<li>${history}</li>`)
        }
});
}

function clear(event) {
    event.preventDefault();
    $('#first-number-input').val('');
    $('#last-number-input').val('');
}
 