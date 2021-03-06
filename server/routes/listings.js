const express = require('express');
const router = express.Router();

const fakeListings = [{
    id: '1',
    title: 'Hyundai Accent',
    teaser: 'Used | 2012 | Torrance, CA',
    specs: 'KBB/AT Specs',
    sellerId: '1'
    },
    {
        id: '2',
        title: 'Tesla Model 3',
        teaser: 'New | 2019 | Chino Hills, CA',
        specs: 'KBB/AT Specs',
        sellerId: '2'
    },
    {
        id: '3',
        title: 'Toyota Corolla',
        teaser: 'Like New | 2018 | Pomona, CA',
        specs: 'KBB/AT Specs',
        sellerId: '3'
    },
    {
        id: '4',
        title: 'Mercedes-Benz C250',
        teaser: 'Used | 2017 | Santa Monica, CA',
        specs: 'KBB/AT Specs',
        sellerId: '4'
    },
    {
        id: '5',
        title: 'Lexus NS230',
        teaser: 'New | 2019 | Glendale, CA',
        specs: 'KBB/AT Specs',
        sellerId: '1'
    }];

router.get('/all/:id', function (req, res, next) {
    const id = req.params.id;

    const listings = fakeListings.filter(obj => obj.sellerId !== id);

    res.status(200).send({
        data: listings
    })
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    const listing = fakeListings.find(obj => obj.id === id);

    res.status(200).send({
        data: listing
    })
});

module.exports = router;