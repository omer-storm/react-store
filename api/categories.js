const router = require("express").Router();
const db = require("../models");

router.get("/", async function (req, res) {
  const categories = await db.Category.find();
  res.status(200).json(categories);
});

router.get("/:category", async function (req, res) {
    const category = await db.Category.find({"name": req.params.category});
    res.status(200).json(category);
  });

module.exports = router;
