const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const db = require('./queries');

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/Homepage/dist/Homepage/"));

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/Homepage/dist/Homepage/index.html")
});

app.get('/links', db.getLinks)
app.get('/data/temp', db.getTempHumidData);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
