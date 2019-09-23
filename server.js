const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/test', (req, res) => {
  
  if (req.body.msg == "ville") {
    res.send('Nous sommes à Paris');
  } else if (req.body.msg == "meteo") {
    res.send('Il fait beau');
  } else {
      res.send('Try Again');
  }

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
