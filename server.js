const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all the files in '/dist' directory
app.use(express.static('dist'));


app.listen(PORT, function () {
  console.log('Example app listening!');
});