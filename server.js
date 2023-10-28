const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const notesRoute = require('./routes/notes');


app.use(express.json());
app.use('/api/notes', notesRoute);
app.use(express.static('public'));

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

