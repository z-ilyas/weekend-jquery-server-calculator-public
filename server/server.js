const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));


app.post('/calculator', (req,res) => {
    console.log('POST /counter');
    res.sendStatus(201);
  });


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })