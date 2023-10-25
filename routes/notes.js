const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({data: 'here is your note'});
})

router.post('/', (req, res) => {
    res.send({data: 'note created'});
})

router.delete('/', (req, res) => {
    res.send({data: 'note has been Deleted'});
})

module.exports = router;