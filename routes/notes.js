const fs = require('fs');
const uuid = require('uuid');
const express = require('express');
const router = express.Router();

const { readFromFile, writeToFile } = require('../helpers/fsUtils');
const database = './db/db.json';
router.get('/', (req, res) => {
    readFromFile(database).then((data) => res.json(JSON.parse(data)));
})

router.post('/', (req, res) => {
    console.info(`${req.method} request received to add a review`);
    console.log(req.body);
    newNote = {
        title : req.body.title,
        text : req.body.text,
        id : uuid.v1()
    }
    
    fs.readFile(database, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const pasrsedNotes = JSON.parse(data);
  
          pasrsedNotes.push(newNote);
  
          fs.writeFile(
            database,
            JSON.stringify(pasrsedNotes, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated Notes!')
          );
        }
        res.send();
    });
})

router.delete('/:id', (req, res) => {
  console.log("Delete : " + req.params.id);

  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedNotes = JSON.parse(data);

      console.log(parsedNotes);
      for (let i = 0; i < parsedNotes.length; i++) {
        if(parsedNotes[i].id === req.params.id){
          parsedNotes.splice(i,1);
        }
      }

      fs.writeFile(
        database,
        JSON.stringify(parsedNotes, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully updated Notes!')
      );
    }
    res.send();
  });
})

module.exports = router;