const mongoose = require("mongoose");
const OrderItem = require("./OrderItem");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/react-store");
})();

module.exports = {
  Item: require("./Item"),
  Like: require("./Like"),
  Category: require("./Category"),
  CreditCard: require("./CreditCard"),
  Order: require("./Order"),
  OrderItem: require("./OrderItem")
};
