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
let inputNumber1 = $('#first-number-input').val();
let inputNumber2 = $('#last-number-input').val();

let inputValues = {
    input1: inputNumber1,
    input2: symbols,
    input3: inputNumber2
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
    $.ajax({
        method: 'GET',
        url: '/calculator',
      }).then(function(responseGet){ 
        let asnwer = responseGet[responseGet.length -1].asnwer

        $('#past-calculations').empty();

        for (let i = 0; i < responseGet.length; i++) {
          $('#Answer').text(asnwer);
          $('#past-calculations"').append(`
          <li>${responseGet[i].input1} ${responseGet[i].symbols} ${responseGet[i].input3} ${responseGet[i].asnwer}</li>
          `)
        }
});
}


function addition() {
    symbols= 'plus';
}
function subtraction() {
    symbols = 'minus';
}
function multiplication() {
    symbols = 'times';
}
function divition(params) {
    symbols = 'divide';
}

function clear() {
    $('#first-number-input').val('');
    $('#last-number-input').val('');
}
 