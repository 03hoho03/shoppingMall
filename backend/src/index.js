const express = require('express');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send("안녕");
})

app.use(express.static(path.join(__dirname, '../uploads')));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);