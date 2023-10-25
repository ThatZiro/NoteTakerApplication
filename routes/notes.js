const fs = require('fs');
const express = require('express');
const router = express.Router();

const { readFromFile } = require('../helpers/fsUtils');

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

router.post('/', (req, res) => {``
    res.send({data: 'note created'});
})

router.delete('/', (req, res) => {
    res.send({data: 'note has been Deleted'});
})

module.exports = router;