const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));


let asnwer;
let pastHistory = [];

app.post('/calculator', (req,res) => {
    console.log('POST //calculator');
    let inputvalues = req.body;
    console.log(inputvalues);
    res.sendStatus(201);
  });

  let input1 = inputvalues.input1;
  let symbols = inputvalues.input2;
  let input3 = inputvalues.input3;

  console.log(input1, symbols, input3);


if(symbols === 'plus'){
    asnwer = input1 + input3
} else if(symbols  === 'minus'){
    asnwer = input1 - input3
} else if(symbols  === 'times'){
    asnwer = input1 * input3
} else if(symbols  === 'divide'){
    asnwer = input1 / input3
}

let entireCalculation = {
    input1: input1,
    symbols: symbols,
    input3: input3,
    asnwer: asnwer:

}

pastHistory.push(entireCalculation);

app.get('/calculator', (req,res) => {
    console.log('GET /calculator');
    res.send(pastHistory)
});


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })