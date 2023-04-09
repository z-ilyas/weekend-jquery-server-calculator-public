const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));

let inputValues = {};

app.post('/calculator', (req,res) => {
    console.log('POST //calculator');
    let inputvalues = req.body;
    console.log(inputvalues);
    inputValues = inputvalues;
    res.sendStatus(201);
  });

  function math(input1, input2) {
    if(inputValues.input3 === 'plus'){
        return input1 + input2
    }
  }

app.get('/calculator', (req,res) => {
    console.log('GET /calculator');
    res.send(math(inputValues.input1, inputValues.input2))
});


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })