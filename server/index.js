const express = require('express');
const app = new express();
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await mongoose.connect(`mongodb://localhost:27017/react-topics`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    console.log('Connected to db 🗄😍')
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}🚀🧨`)
    });
  } catch (err) {
    console.log('Error', err)
  }
}) ();
