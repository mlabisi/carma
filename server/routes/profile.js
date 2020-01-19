const express = require('express');
const router = express.Router();

const fakeProfiles = [{
    sellerId: '1',
    name: 'Denise Tran',
    pic: 'https://i.pinimg.com/originals/d0/92/1e/d0921e50a51ec10ec77918551c03c6d2.png',
    rating: '★★★☆☆',
    specs: 'KBB/AT Specs',
},
    {
        sellerId: '2',
        name: 'Angela Gadon',
        pic: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Smirk_Face_Emoji_large.png?v=1571606036',
        rating: '★★★★☆',
        specs: 'KBB/AT Specs',
    },
    {
        sellerId: '3',
        name: 'Billy Bronco',
        pic: 'https://pbs.twimg.com/profile_images/423624945802153985/wDPO-ztt.jpeg',
        rating: '★★★★★',
        specs: 'KBB/AT Specs',
    }];

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    const profile = fakeProfiles.find(obj => obj.sellerId === id);
    console.log(profile)
    res.status(200).send({
        data: profile
    })
});

module.exports = router;