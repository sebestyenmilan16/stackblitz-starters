const express = require('express');
const { resolve } = require('path');

const app = express();
app.use(express.json())
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {

  if (req.params) {
    console.log(req.params)
  }
  if (req.query) {
    console.log(req.query)
  }

  return res.status(200).json('Hello world')
  
});

app.post('/', (req, res)=>{

  const {body = {} } = req.body
  switch (body?.endpoint) {
    case '/hello':
      break;
    case 'other' : 
      break;
  }

  return res.status(201).json('OK');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
