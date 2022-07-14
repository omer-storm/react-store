const { Schema, model } = require("mongoose");

const orderItemSchema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  qtyInfo: Array
});

module.exports = model("OrderItem", orderItemSchema);
