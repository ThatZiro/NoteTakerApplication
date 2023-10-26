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
      });
})

router.delete('/', (req, res) => {
    res.send({data: 'note has been Deleted'});
})

module.exports = router;