const router = require('express').Router()
const db = require('../models')


router.get('/', async function(req, res) {
    const items = await db.Item.find();
    res.status(200).json(items);

  });

module.exports = router