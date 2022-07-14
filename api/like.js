const router = require("express").Router();
const db = require("../models");

router.get("/", async function (req, res) {
  const likes = await db.Like.find().populate("item");
  res.status(200).json(likes);
});

router.post("/:iid", async function (req, res) {
  const like = await db.Like.create({ item: req.params.iid });
  res.status(200).json(like);
});

router.delete("/:iid", async function (req, res) {
  const like = await db.Like.deleteOne({ item: req.params.iid });
  res.status(200).json(like);
});

module.exports = router;
