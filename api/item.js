const router = require('express').Router()
const db = require('../models')


router.get('/', async function(req, res) {
    // const items = await db.Item.find();
    const items = await db.Item.aggregate([ 
      { $lookup:{ from: 'likes',  localField: 'iid',  foreignField: 'iid', as: 'like' }}]);

    res.status(200).json(items);

  });

router.get('/:id', async function(req, res) {
    const item = await db.Item.find({"iid": req.params.id});
    res.status(200).json(item[0]);
  });

module.exports = router