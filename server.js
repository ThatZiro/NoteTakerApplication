const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () => {
    console.log('Server Running');
})

