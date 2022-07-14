const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  fullName: String,
  email: String,
  phone: String,
  country: String,
  city: String,
  deliveryAddress: String,
  paymentMethod: String,
  creditCard: [{ type: Schema.Types.ObjectId, ref: "CreditCard" }],
  orderItem: [{ type: Schema.Types.ObjectId, ref: "OrderItem" }]

});

module.exports = model("Order", orderSchema);
