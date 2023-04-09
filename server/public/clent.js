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
    input3: symbols()
}

$.ajax({
    method: 'POST',
    url: '/calculator',
    data: inputValues
  }).then(function(responsePost){
    $.ajax({
        method: 'GET',
        url: '/calculator',
    }).then(function(responseGet){
      console.log(responseGet);
      $('').append(`
        
      `)
    });
  });
}

function symbols() {
if($('#plus-btn').on('click')){
    return 'plus';
}else if($('#minus-btn').on('click')){
    return 'minus';
}else if($('#times-btn').on('click')){
    return 'times';
}else if($('#divide-btn').on('click')){
    return 'divide';
}
}