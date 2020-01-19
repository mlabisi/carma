const express = require('express');
const router = express.Router();

const fakeLikes = [
    {
        listingId: '2',
        userId: '4'

    },
    {
        listingId: '5',
        userId: '4'
    }];

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    const likes = fakeLikes.filter(obj => obj.userId === id);

    res.status(200).send({
        data: likes
    })
});

module.exports = router;