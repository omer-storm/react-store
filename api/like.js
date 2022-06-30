const router = require('express').Router()
const db = require('../models')


router.get('/', async function(req, res) {
    const likes = await db.Like.aggregate([ 
		{ $lookup:{ from: 'items',  localField: 'iid',  foreignField: '_id', as: 'item' }}]);
        res.status(200).json(likes);
});

router.post('/:iid', async function(req, res) {
  const like = await db.Like.create({'iid': req.params.iid})
  // console.log(like)
  res.status(200).json(like)

})

router.delete('/:iid', async function(req, res) {

  const like = await db.Like.deleteOne({'iid': req.params.iid})
  res.status(200).json(like)
})

 
module.exports = router