const router = require("express").Router();
const { Order, CreditCard, OrderItem } = require("../models");

router.post("/", async (req, res) => {
  if (Object.entries(req.body.form.creditCardInfo).length === 0) {
    delete req.body.creditCardInfo;
    const qtyInfo = []
    req.body.cartItems.forEach(element => {
      qtyInfo.push({qtyBought: element.qty, name: element.item});
    });
    const orderItem = await OrderItem.create({ items: req.body.cartItems, qtyInfo });
    const order = await Order.create({
      ...req.body.form,
      creditCard: null,
      orderItem: orderItem,
    });
    res.status(200).json(order);
  } else {
    const creditCard = await CreditCard.create(req.body.form.creditCardInfo);
    delete req.body.creditCardInfo;
    const qtyInfo = []
    req.body.cartItems.forEach(element => {
      qtyInfo.push({qtyBought: element.qty, name: element.item});
    });
    const orderItem = await OrderItem.create({ items: req.body.cartItems, qtyInfo });
    const order = await Order.create({
      ...req.body.form,
      creditCard: creditCard,
      orderItem: orderItem,
    });
    res.status(200).json({ order });
  }
});

router.get("/orderitems", async (req, res) => {
  const items = await OrderItem.find().populate("items").exec();
  // const items = await OrderItem.aggregate([
  //   {
  //     $lookup: {
  //       from: "items",
  //       localField: "items",
  //       foreignField: "_id",
  //       as: "items",
  //     },
  //   },
  // ]);
  res.status(200).json( items );
});

router.get("/", async (req, res) => {
  const orders = await Order.find()
    .populate("creditCard")
    .populate({ path: "orderItem", populate: { path: "items" } })
    .exec();
  res.status(200).json({ orders });
});

module.exports = router;
