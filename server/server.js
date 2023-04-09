const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));


let answer;
let pastHistory = [];

app.post('/calculator', (req,res) => {
    console.log('POST //calculator');
    let inputvalues = req.body;
    console.log(inputvalues);
    let input1 = inputvalues.input1;
    let symbols = inputvalues.input2;
    let input3 = inputvalues.input3;
    math(input1, symbols, input3);
    console.log(pastHistory);
    res.sendStatus(201);
});


app.get('/calculator', (req,res) => {
    console.log('GET /calculator');
    let calculationObject = {
        answer: answer,
        pastHistory: pastHistory
    };
    res.send(calculationObject);
})


function math(number1, symbols, number2) {
    if(symbols === 'plus'){
        console.log('addition test');
        answer = number1 + number2
        pastHistory.push(`${number1} + ${number2} = ${answer}`);
    } else if(symbols  === 'minus'){
        answer = number1 - number2
        pastHistory.push(`${number1} - ${number2} = ${answer}`);
    } else if(symbols  === 'times'){
        answer = number1 * number2
        pastHistory.push(`${number1} * ${number2} = ${answer}`);
    } else if(symbols  === 'divide'){
        answer = number1 / number2
        pastHistory.push(`${number1} / ${number2} = ${answer}`);
    }
}


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })