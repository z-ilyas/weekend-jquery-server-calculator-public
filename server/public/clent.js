$(document).ready(onReady);

function onReady() {
    console.log('client side');
    $('#totals-btn').on('click', captureInput);
}

function captureInput(event) {
    event.preventDefault();

let inputValues = {
    input1: $('#first-number-input').val(),
    input2: $('#last-number-input').val(),
}

$.ajax({
    method: 'POST',
    url: '/calculator',
    data: inputValues
  }).then(function(responsePost){

  });

}