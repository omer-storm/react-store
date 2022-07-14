const { Schema, model } = require("mongoose");

const creditCardSchema = new Schema({
  cardNumber: String,
  date: String,
  cvvCode: String,
  cardName: String,
});

module.exports = model("CreditCard", creditCardSchema);
