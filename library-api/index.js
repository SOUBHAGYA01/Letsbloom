const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);


const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.json());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
